@echo off
echo === BulkFlex Chatbot Push ===
cd /d "c:\Users\ASUS\OneDrive\Desktop\Bulkflex\bluxflex"
echo Current branch:
git branch --show-current
echo.
echo Staging all changes...
git add -A
echo.
echo Committing...
git commit -m "feat: complete chatbot redesign & AI flow upgrade

- Redesigned UI matching chatbot.com reference (avatar header, asymmetric bubbles)
- Full-screen mobile takeover, floating panel on desktop
- Wrap grid quick replies (no horizontal scroll)
- Instant auto-scroll to bottom on new messages
- Compact product carousel (2 cards visible, scroll-snap)
- Business-accurate FAQ: shipping ports, MOQ tiers, certifications
- 9-layer intent routing engine in chatbotRules.js
- Expanded intents with natural language keywords
- Emoji-stripping fix for quick reply matching
- Fixed input double border, focus ring, textarea border
- Removed Custom Printing quick reply from welcome"

echo.
echo Pushing to origin main...
git push origin main
echo.
echo Done! Check above for any errors.
pause
