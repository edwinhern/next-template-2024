Setup secrets.GH_Token

1. Sign in into your Github Account

2. Navigate to [Developer Settings](https://github.com/settings/tokens)

3. Make sure to be in `Personal access tokens` and click `Tokens(classic)`

4. Provide all access for:

   - repo (Full control of private repositories)
   - workflow (Update GitHub Action workflows)
   - write:packages (Upload packages to GitHub Package Registry)
   - delete:packages (Delete packages from GitHub Package Registry)

5. Create Token and keep it saved in case you want to reuse!

6. Go to the settings for the repo (https://github.com/edwinhern/next-template-2024/settings)

7. Select `Secrets and variables` and click `Actions`

8. Under `Repository secrets` click `New repository secret`

9. Name the token `GH_TOKEN` and add the key.

10. That's it! You can either push another or go to the failed action and re-run the job(s)
