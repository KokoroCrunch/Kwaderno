# Deployment Guide for Kwaderno by Sartin Cafe

This guide will help you deploy the Kwaderno MERN application to production.

## Prerequisites

- Node.js (v14 or higher)
- Git
- MongoDB Atlas account (free tier available)
- Cloudinary account (free tier available)
- Railway or Render account (for backend)
- Vercel account (for frontend)

## Step 1: Set Up MongoDB Atlas

1. Go to [MongoDB Atlas](https://www.mongodb.com/cloud/atlas)
2. Create a free account and sign in
3. Click "Build a Database" and select "Free" tier
4. Choose a cloud provider and region closest to your users
5. Create a database user with username and password
6. Whitelist your IP address (or use 0.0.0.0/0 for all IPs)
7. Click "Connect" → "Connect your application"
8. Copy the connection string (it will look like: `mongodb+srv://<username>:<password>@cluster.mongodb.net/kwaderno`)
9. Replace `<password>` with your actual password

## Step 2: Set Up Cloudinary

1. Go to [Cloudinary](https://cloudinary.com/)
2. Create a free account and sign in
3. Navigate to the Dashboard
4. Copy your:
   - Cloud name
   - API Key
   - API Secret
5. These will be used as environment variables

## Step 3: Deploy Backend to Railway

### Option A: Deploy via Railway CLI (Recommended)

1. Install Railway CLI:
```bash
npm install -g @railway/cli
```

2. Login to Railway:
```bash
railway login
```

3. Navigate to the Backend directory:
```bash
cd Backend
```

4. Initialize Railway project:
```bash
railway init
```

5. Add environment variables:
```bash
railway variables set PORT=5000
railway variables set MONGODB_URI=mongodb+srv://<username>:<password>@cluster.mongodb.net/kwaderno
railway variables set JWT_SECRET=your_secure_jwt_secret_here
railway variables set NODE_ENV=production
railway variables set CLOUDINARY_CLOUD_NAME=your_cloudinary_cloud_name
railway variables set CLOUDINARY_API_KEY=your_cloudinary_api_key
railway variables set CLOUDINARY_API_SECRET=your_cloudinary_api_secret
```

6. Deploy:
```bash
railway up
```

7. Railway will provide you with a production URL (e.g., `https://your-app.railway.app`)

### Option B: Deploy via Railway Dashboard

1. Go to [Railway](https://railway.app/)
2. Create a new project
3. Click "Deploy from GitHub repo"
4. Connect your GitHub repository
5. Select the `Backend` folder as the root directory
6. Add environment variables in the "Variables" tab:
   - `PORT=5000`
   - `MONGODB_URI=mongodb+srv://<username>:<password>@cluster.mongodb.net/kwaderno`
   - `JWT_SECRET=your_secure_jwt_secret_here`
   - `NODE_ENV=production`
   - `CLOUDINARY_CLOUD_NAME=your_cloudinary_cloud_name`
   - `CLOUDINARY_API_KEY=your_cloudinary_api_key`
   - `CLOUDINARY_API_SECRET=your_cloudinary_api_secret`
7. Click "Deploy"

### Option C: Deploy to Render

1. Go to [Render](https://render.com/)
2. Create a new "Web Service"
3. Connect your GitHub repository
4. Set root directory to `Backend`
5. Build command: `npm install`
6. Start command: `node server.js`
7. Add environment variables
8. Click "Deploy Web Service"

## Step 4: Deploy Frontend to Vercel

### Option A: Deploy via Vercel CLI (Recommended)

1. Install Vercel CLI:
```bash
npm install -g vercel
```

2. Navigate to the Frontend directory:
```bash
cd Frontend
```

3. Login to Vercel:
```bash
vercel login
```

4. Deploy:
```bash
vercel
```

5. When prompted, set the environment variable:
   - `REACT_APP_API_URL=https://your-backend-url.com/api`

6. Deploy to production:
```bash
vercel --prod
```

### Option B: Deploy via Vercel Dashboard

1. Go to [Vercel](https://vercel.com/)
2. Click "Add New Project"
3. Import your GitHub repository
4. Set root directory to `Frontend`
5. Add environment variable:
   - `REACT_APP_API_URL=https://your-backend-url.com/api`
6. Click "Deploy"

## Step 5: Verify Deployment

1. Test your backend API:
   - Visit `https://your-backend-url.com/api`
   - You should see: `{"message":"Kwaderno by Sartin Cafe API"}`

2. Test your frontend:
   - Visit `https://your-frontend-url.com`
   - Navigate through the website

3. Test admin functionality:
   - Create an admin account via the API
   - Login to the admin panel
   - Test menu item creation with image upload

## Environment Variables Reference

### Backend (.env)
```
PORT=5000
MONGODB_URI=mongodb+srv://<username>:<password>@cluster.mongodb.net/kwaderno
JWT_SECRET=your_secure_jwt_secret_here
NODE_ENV=production
CLOUDINARY_CLOUD_NAME=your_cloudinary_cloud_name
CLOUDINARY_API_KEY=your_cloudinary_api_key
CLOUDINARY_API_SECRET=your_cloudinary_api_secret
```

### Frontend (.env)
```
REACT_APP_API_URL=https://your-backend-url.com/api
```

## Troubleshooting

### Backend Deployment Issues

**MongoDB Connection Error**
- Ensure MongoDB Atlas cluster is running
- Check that IP whitelist includes 0.0.0.0/0
- Verify connection string format

**Cloudinary Upload Error**
- Verify Cloudinary credentials are correct
- Check that Cloudinary account is active
- Ensure folder name in code matches Cloudinary folder

### Frontend Deployment Issues

**API Connection Error**
- Verify `REACT_APP_API_URL` is set correctly
- Check that backend CORS allows your frontend domain
- Ensure backend is deployed and running

**Build Error**
- Ensure all dependencies are installed
- Check for any syntax errors in code
- Verify Node.js version compatibility

## Cost Summary

- **MongoDB Atlas**: Free tier (512MB storage)
- **Cloudinary**: Free tier (25GB storage, 25GB bandwidth/month)
- **Railway**: Free tier ($5/month credit, then pay-as-you-go)
- **Render**: Free tier (limited hours, then pay-as-you-go)
- **Vercel**: Free tier (unlimited deployments, 100GB bandwidth/month)

## Post-Deployment Checklist

- [ ] Backend API is accessible
- [ ] Frontend loads correctly
- [ ] Database connection works
- [ ] Image uploads work (Cloudinary)
- [ ] Admin login works
- [ ] Menu CRUD operations work
- [ ] User management works
- [ ] Environment variables are secure
- [ ] SSL/HTTPS is enabled
- [ ] Custom domain is configured (optional)

## Security Best Practices

1. Never commit `.env` files to version control
2. Use strong, unique secrets for JWT and API keys
3. Enable IP whitelisting on MongoDB Atlas
4. Use HTTPS for all connections
5. Regularly update dependencies
6. Monitor logs for suspicious activity
7. Implement rate limiting on API endpoints
8. Use environment-specific configurations

## Scaling Considerations

For high-traffic scenarios:

1. **Database**: Upgrade MongoDB Atlas tier for better performance
2. **CDN**: Vercel provides built-in CDN for frontend
3. **Caching**: Implement Redis caching for frequently accessed data
4. **Load Balancing**: Railway/Render handle this automatically
5. **Monitoring**: Set up error tracking (Sentry, LogRocket)

## Support

For issues or questions:
- Check the main README.md for project details
- Review platform-specific documentation (Railway, Vercel, etc.)
- Check MongoDB Atlas and Cloudinary documentation
