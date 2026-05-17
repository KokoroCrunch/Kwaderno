import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { menuAPI, userAPI } from '../utils/api';
import { Coffee, Users, Utensils, LogOut, Plus } from 'lucide-react';

const AdminDashboard = () => {
  const navigate = useNavigate();
  const [stats, setStats] = useState({
    totalMenuItems: 0,
    totalUsers: 0,
    availableItems: 0
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchStats();
  }, []);

  const fetchStats = async () => {
    try {
      const [menuRes, usersRes] = await Promise.all([
        menuAPI.getAll(),
        userAPI.getAll()
      ]);
      
      const menuItems = menuRes.data;
      const users = usersRes.data;
      
      setStats({
        totalMenuItems: menuItems.length,
        totalUsers: users.length,
        availableItems: menuItems.filter(item => item.available).length
      });
    } catch (error) {
      console.error('Error fetching stats:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    navigate('/admin/login');
  };

  if (loading) {
    return <div className="min-h-screen flex items-center justify-center">Loading...</div>;
  }

  return (
    <div className="min-h-screen py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-4xl font-bold text-kwaderno-brown font-serif">Admin Dashboard</h1>
            <p className="text-gray-600 mt-2">Manage your restaurant</p>
          </div>
          <button
            onClick={handleLogout}
            className="flex items-center gap-2 bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg transition-colors"
          >
            <LogOut className="h-5 w-5" />
            Logout
          </button>
        </div>

        {/* Stats Cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <div className="bg-white rounded-lg shadow-lg p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-600 text-sm">Total Menu Items</p>
                <p className="text-3xl font-bold text-kwaderno-brown">{stats.totalMenuItems}</p>
              </div>
              <Utensils className="h-12 w-12 text-kwaderno-brown" />
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-600 text-sm">Total Users</p>
                <p className="text-3xl font-bold text-kwaderno-brown">{stats.totalUsers}</p>
              </div>
              <Users className="h-12 w-12 text-kwaderno-brown" />
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-600 text-sm">Available Items</p>
                <p className="text-3xl font-bold text-kwaderno-brown">{stats.availableItems}</p>
              </div>
              <Coffee className="h-12 w-12 text-kwaderno-brown" />
            </div>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="grid md:grid-cols-2 gap-6">
          <button
            onClick={() => navigate('/admin/menu')}
            className="bg-kwaderno-brown hover:bg-kwaderno-dark text-white rounded-lg shadow-lg p-8 text-left transition-colors"
          >
            <div className="flex items-center gap-4">
              <Utensils className="h-12 w-12" />
              <div>
                <h3 className="text-2xl font-bold mb-2">Manage Menu</h3>
                <p className="text-kwaderno-light">Add, edit, or delete menu items</p>
              </div>
            </div>
          </button>

          <button
            onClick={() => navigate('/admin/users')}
            className="bg-kwaderno-dark hover:bg-kwaderno-brown text-white rounded-lg shadow-lg p-8 text-left transition-colors"
          >
            <div className="flex items-center gap-4">
              <Users className="h-12 w-12" />
              <div>
                <h3 className="text-2xl font-bold mb-2">Manage Users</h3>
                <p className="text-kwaderno-light">View and manage user accounts</p>
              </div>
            </div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
