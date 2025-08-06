# Google Maps API Setup Guide

This guide will help you set up Google Maps integration for the Radical Football website.

## Prerequisites

1. A Google Cloud Platform account
2. A project in Google Cloud Console

## Step 1: Create a Google Cloud Project

1. Go to [Google Cloud Console](https://console.cloud.google.com/)
2. Create a new project or select an existing one
3. Enable billing for your project (required for Maps API)

## Step 2: Enable Maps JavaScript API

1. In the Google Cloud Console, go to "APIs & Services" > "Library"
2. Search for "Maps JavaScript API"
3. Click on it and press "Enable"

## Step 3: Create API Key

1. Go to "APIs & Services" > "Credentials"
2. Click "Create Credentials" > "API Key"
3. Copy the generated API key

## Step 4: Restrict API Key (Recommended)

1. Click on the created API key to edit it
2. Under "Application restrictions", select "HTTP referrers (web sites)"
3. Add your domain(s):
   - `localhost:3000/*` (for development)
   - `yourdomain.com/*` (for production)
4. Under "API restrictions", select "Restrict key"
5. Select "Maps JavaScript API" from the dropdown
6. Click "Save"

## Step 5: Configure Environment Variables

### Option 1: Using .env.local file (Recommended for development)

Create a `.env.local` file in your project root:

```bash
# .env.local
NEXT_PUBLIC_GOOGLE_MAPS_API_KEY=your_actual_api_key_here
```

### Option 2: Using .env file

Create a `.env` file in your project root:

```bash
# .env
NEXT_PUBLIC_GOOGLE_MAPS_API_KEY=your_actual_api_key_here
```

### Option 3: Environment Variables in Production

For production deployment (Vercel, Netlify, etc.), set the environment variable:

```bash
NEXT_PUBLIC_GOOGLE_MAPS_API_KEY=your_actual_api_key_here
```

## Step 6: Update Configuration

The API key is automatically loaded from the environment variable in `src/lib/maps-config.ts`.

## Step 7: Test the Integration

1. Start your development server: `npm run dev`
2. Navigate to the Community page
3. Check the Community Map section
4. The map should load with the Google Maps integration

## Security Notes

- **Never commit your API key to version control**
- **Always restrict your API key** to specific domains
- **Monitor your API usage** in Google Cloud Console
- **Set up billing alerts** to avoid unexpected charges

## Troubleshooting

### Map not loading
- Check if the API key is correctly set in environment variables
- Verify the API key is not restricted to wrong domains
- Check browser console for error messages

### API key errors
- Ensure Maps JavaScript API is enabled
- Check if billing is enabled for your project
- Verify API key restrictions are not too restrictive

### Development vs Production
- Use different API keys for development and production
- Set appropriate domain restrictions for each environment

## Cost Considerations

- Google Maps JavaScript API has a generous free tier
- Monitor usage in Google Cloud Console
- Set up billing alerts to avoid unexpected charges
- Consider implementing usage limits if needed

## Files Modified

- `src/lib/maps-config.ts` - Configuration file for Maps API
- `src/components/CommunityMap.tsx` - Community map component
- `src/app/community/page.tsx` - Added community map section
- `src/app/map/page.tsx` - Removed community map section

## Next Steps

Once the basic integration is working, you can:

1. Add custom markers for community locations
2. Implement location search functionality
3. Add directions and routing features
4. Customize map styling to match your brand
5. Add interactive features like location details popups
