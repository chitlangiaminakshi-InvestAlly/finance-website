# finance-website
finance-website


# Importatnt Setups

### Create a Write token in sanity for `Like` functinality to work 
1. Go to Sanity Dashboard

  Visit: https://www.sanity.io/manage/personal/project/npm751sl

2. Create API Token

1. Click API tab
2. Click Tokens
3. Click Add API token
4. Settings:
- Name: "Write Token" (or any name)
- Permissions: Select Editor ✅
5. Click Save
6. Copy the token (you won't see it again!)

3. Add to Environment File

Open nextjs-app/.env.local and uncomment/add:

// Uncomment this line and paste your token:
SANITY_API_WRITE_TOKEN="sk-your-actual-token-here"

4. Restart Dev Server

// Stop current server (Ctrl+C)
// Restart it
npm run dev


### setup all the details in .env variables. 

