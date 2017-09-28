# Application / Site Mockup

## Description
A site to sell access to vimeo.com hosted medical bitesize (5-min) tutorial videos.

- Initially a binary membership level of free (no login, any visitor) vs subscribed (paid)
- Different lengths of membership possible with expiry
- Membership signs user up to Mailchimp automated list to control expiry / renewal email / offers
- Non-members can view free videos but get (modal) nags to upgrade and sign onto mailing list
  - Can view 2 videos then the 3rd nags for mailing list sign up before viewing
- **Will need** option for _courses_ in the future
  - Likely achieved via grouping at taxonomy level into a course
- Payment processing by Stripe

### Integrations
- Stripe
- Mailchimp (need to determine points of integration)
- Vimeo API (for backend uploading of video and frontend pulling)
- Disqus comments per single case

## Intended flow and behaviour
1. New visitor lands on site and can view free videos but is nagged to upgrade and subscribe. Can keep viewing free videos but must provide email address to mailing list to continue after 2? videos.

2. Upgrade via single modal screen to capture stripe data with confirmation of success into modal. On mobile, modal will be full screen overlay.

3. Logged in user is no longer nagged and sees a different streamlined homepage without promo material. Other features:
  - Better user experience
  - My account page showing statistics on completeness of material <if possible>
  - My account showing order history, password and username etc
  - Better filtering options of cases
 
  - #### 3.a Case Consumption
    * Case opens to the single page view
    * Shows whether case already completed or not
    * Ideally shows how complete the section is (section to be decided i.e. taxonomy)
    * Suggests 3 other cases
    * Rich taxonomy tags clickable to encourage further browsing around subject
    * Disqus comments to allow user feedback and questions on cases
    * _Potentially_ Scripted study... i.e. curated lists of topics (is this a course?)

4. Subscription is nearing expiry > automated mailchimp email to suggest renewal / offer discount code to renew or send to a friend

5. Expiry :-( remains on mailchimp list (is there a way of flagging as expired??)
