# Continuous Engagement Ltd Website

 Link to the wesite [here](https://stuchapman.github.io/UCD-MS-Project-Continuous-Engagement/)

Create a website for Continuous Engagement Ltd – a consultancy that specialises in Continuous Improvement 
    through: Lean, 6 Sigma and Operational Excellence.
The branding is to match the profile photograph of the Director.
There should be an overview of: the Services provided, the Methods employed, and Contact information.
The site will be used to supplement the information that the Director will send to prospective Clients and 
    Recruiters. It is more likely the site will be “pushed” to users than the user will actively seek it out.

## UX

Websites that I specifically reviewed for inspiration on: style, layout and navigation:
	[amazon](http://www.amazon.co.uk), 
	[facebook](http://www.facebook.com), 
	[reinvigoration](http://www.reinvigoration.com), 
    [sainsburys](http://www.sainsburys.co.uk) 

… particularly in the formatting from mobile to desktop devices, menus and text layout.

### User Stories 

have been grouped into 2: Director of Continuous Engagement (site owner) and Clients/Recruiters (user)

### As the Director of Continuous Engagement, I …

1.	… want the user to see a professional “shop-window” for my company.
2.	… want the user to have all of the regulatory information for the company (Company number, VAT number etc.)
3.	… want the user to have contact information for the company.
4.	… want the user to be aware of the different methodologies that I use.
5.	… want the user to have a brief overview of these methodologies (with links to external sources for further 
    reading).
6.	… want the user to see examples of where I have put these methodologies into practice.
7.	… want to user to see the benefits of putting these methodologies into practice.
8.	… want the user to be aware of the various industries that I have applied these methods to.
9.	… want the user to have an overview of the services that Continuous Engagement offers them (training, 
    coaching, deployment, resourcing).
10.	… want to use this site as a means to link my consultancy work with my programming work – ultimately adding 
    Agile and Web Development to the showcase.

### As the Client/Recruiter, I …

1.	… want to understand what Continuous Engagement do; visually and quickly, without having to navigate 
    through lots of information.
2.	… want to be able to dive deeper into what Continuous Engagement can do for me as and when I see fit.
3.	… want to know what I will receive from Continuous Engagement if I engage with them.
4.	… want to know that Continuous Engagement has been successful elsewhere.
5.	… want to be able to contact Continuous Engagement for a follow-up conversation.
6.	… want to be able to view this information easily on all digital devices.
7.	… want to know that Continuous Engagement is a professional company.
8.	… want to be assured that Continuous Engagement can benefit my business, and want to contract with them.

I designed the site around 5 pages:

**index.html** - to introduce the user to the company and provide navigation to the other areas of the site

**services.html** - to describe the 4 main services that the company provides

**methods.html** - to breifly outline the 3 main methods of working

**case-studies.html** - to give examples of where these methods have worked succesfully

**contact.html** - contact information and a photograph of the Director

### Mockups:

I produced the following mockups prior to writing any code. I found that tremendously useful as I made a lot 
    of design and functionality decisions up front. I also researched a particular Bootstrap 
    capability – [Accordion/Collapse](https://getbootstrap.com/docs/4.1/components/collapse/#accordion-example) 
    as when I was designing the methods.html layout, I felt the best method would be to hide and reveal relevant 
    content on the page (rather than navigate to separate pages)

[index.html](https://github.com/StuChapman/UCD-MS-Project-Continuous-Engagement/blob/195ffade32fdce65d439bf33c1f11352de30da86/mockups/User_Centric_Development_Milestone_Project-index.pdf)

[services.html](https://github.com/StuChapman/UCD-MS-Project-Continuous-Engagement/blob/195ffade32fdce65d439bf33c1f11352de30da86/mockups/User_Centric_Development_Milestone_Project-services.pdf)

[methods.html](https://github.com/StuChapman/UCD-MS-Project-Continuous-Engagement/blob/195ffade32fdce65d439bf33c1f11352de30da86/mockups/User_Centric_Development_Milestone_Project-methods.pdf)

[case-studies.html](https://github.com/StuChapman/UCD-MS-Project-Continuous-Engagement/blob/195ffade32fdce65d439bf33c1f11352de30da86/mockups/User_Centric_Development_Milestone_Project-case-studies.pdf)

[contact.html](https://github.com/StuChapman/UCD-MS-Project-Continuous-Engagement/blob/195ffade32fdce65d439bf33c1f11352de30da86/mockups/User_Centric_Development_Milestone_Project-contact.pdf)


### Colour Schemes and Fonts

I used this [image](https://github.com/StuChapman/UCD-MS-Project-Continuous-Engagement/blob/d33885bf6639d8c8dca7a632edbea6ad5e7f8b1d/assets/images/Stu-Chapman-Photo.jpg) as the 'brand' for the company and the colour scheme for the site.

The colours I used (by 'eyedropping' the image in PowerPoint to get the hex code) were:

1. #657486 for the navbar
2. #000000 for small sized text
3. #101828 for medium sized text and the footer
4. #CC613A for large text, banners and infographic backgrounds
5. #ffffff for banner text and infographic line/text
6. #D9D9D9 and #F0F0F0 for the photolink section (these were 'eyedropped' from the background image)

I used these colours exclusively to keep the 'brand' appearance across all pages.

The font I used exclusively is Cairo from Google fonts. I also used this for the 'brand image'.

### Approach

The approach I took for designing the site, was to start with the small media device, portrait view, design that, then make any adaptations
for a tablet, portrait view, and finally any changes for a large size, landscape view. I did this in the mockups first, then as I built the app.
I constructed the code in the mobile-first, portrait view, then added media queries purely for large size, landscape view.
I didn't want to have a multuitude of media queries for different sizes, I preferred to have a completely responsive approach.
For that, I set font sizes to be responsive, utilising some code from [css-tricks](https://css-tricks.com/books/fundamental-css-tactics/scale-typography-screen-size/) 
and [made by Mike](https://www.madebymike.com.au/writing/fluid-type-calc-examples/)

font-size: calc([minimum size] + ([maximum size] - [minimum size]) * ((100vw - [minimum viewport width]) / ([maximum viewport width] - [minimum viewport width])));

This code, along with using vw for font sizes and certain features, such as banners and images, allowed the site to be almost fully responsive across different portrait view sizes.

## Features

### Existing Features

1.	A Navigation bar, that is standard across all pages. It is made up of 3 sections:
    
    a.	A collapsed “burger” style menu that allows the user to access every page on the site from the top left corner of any page, in all media device sizes.
    
    b.	A “brand image” that allows the user to hyperlink to the home page from an page, in all media device sizes.
    
    c.	A menu that allows the user to navigate to any page from any page and also see which page they are currently on by means of differentiated font color. The menu shrinks to icons only on smaller media devices in landscape orientation and the “contact us” icon only in portrait orientation.

2.	A background image that gives the user a feeling of ‘business’ and ‘commerce’.
3.	A large font mission statement for each page that succinctly gets across to the user what the company/page does (excluding the “contact us” page which is self-explanatory).
4.	Supporting, smaller font text to supplement the mission statement.
5.	3 infographics that repeat across the “index”, “methods (expanded)” and “contact (large size, landscape view only) that summarise the 3 main areas of expertise of the company.
6.	A footer which shows the user the regulatory information for the company.
7.	4 “photolinks” on the “index” page to allow quick navigation to services.html
8.	4 banners on the “services” page that allow the user to navigate, via a Bootstrap “accordion” example, to the 4 different services the company offers, with supporting text. These are block rows on portrait screens and inline columns for landscape.
9.	3 banners on the “methods” page that allow the user to navigate, via a Bootstrap “accordion” example on small/medium sized media devices, and a Bootstrap “carousel” for large media devices, to the 3 main areas of expertise of the company, with supporting text. These are block rows on portrait screens and inline columns for landscape.
10.	A Bootstrap “carousel” on the “services” and/or “methods” pages to present the collapsed information in an even more UX friendly way.
11.	4 Case Studies on the “case-studies” page to showcase examples of the success of the methods to the user. These are block rows in small/medium media devices, and 2 x 2 inline columns on large+ media devices.
12.	An image of the company director along with contact information (name, job title email, LinkedIn and phone) to give the user options to contact the director. Email, LinkedIn and phone hyperlink to email app, LinkedIn website and phone app respectively.

### Features Left to Implement

1.	Completing the “contact us” form functionality to enable the user to submit specific information about business need.
2.	Interactive learning that brings the methods further to life for the user (multi choice quiz etc.)
3.  The ability to link from the photolinks or infographics on index.html directly to the expanded section on the services.html and methods.html pages respectively (I believe this will utilise JavaScript).

## Technologies Used

1.	[html](https://en.wikipedia.org/wiki/HTML) - to create the structure and text of each page.
2.	[css](https://en.wikipedia.org/wiki/Cascading_Style_Sheets) - to style each page centrally and individually.
3.	[Bootstrap](https://getbootstrap.com/) plugins - Responsive grid and prebuilt components to enable more responsive design; particularly “accordion” and “toggle” collapsed (hidden) content.
4.	[Font Awesome](https://fontawesome.com/v4.7.0/icons/) - for icons on contact.html.
5.	[Google Fonts](https://fonts.google.com/?query=cairo) - for the ‘Cairo’ font – used exclusively across the site.
6.	[Figma](http://www.figma.com) - to produce the mockups.

## Testing
My approach to testing was to test each of the features for functionality (operation) and rendering (visuals) against a variety of media devices, in both portrait and landscape orientation, as well as the 4 main browsers.
I would test ‘as-and-when’ I was building and enhancing features, then, when the site was nearing completion; I created a matrix to complete methodically to ensure all functions operated and rendered correctly.

I also completed some ‘user testing’ my asking my family to look at the site on mobile devices and laptops.

During the ongoing build test, I discovered an issue with the background image not rendering. It appeared fine in Gitpod, but when I first deployed to Github, the image was not visible. I tried a number of options to solve this, and found the only one that would work, was putting the **full** url from the image hosted on Github into the code. This is unsatisfactory for me, as it means the code is static and will not be portable without access to Github. I am still investigating a more satisfactory solution.

### Challenges

There were a few issues that needed research before I could solve them:

1. I discovered that using the accordion method of revealing hidden content on methods.html was not a great user experience, as the revealed content was off the bottom of the viewable screen. I believe the user would be unaware of this and feel that the link was broken. I initially tried adding a second set of code to allow the revealed content to appear *above* the banners, but this created duplicate ‘id’s in the code.
    After discussion with my mentor, I decided to use the carousel method (which I had seen on the Amazon site and liked). This works much better and the user experience is much cleaner. It also inspired me to add some images to help describe the content to the user.

2. The height of the iPhone X screen was a challenge as on designing index.html, there was a lot of blank space below the footer.
    There was a similar issue on the iPad Pro. Yet, the view fitted more regular phone sizes perfectly. I decided to style and size
    the app for the iPhone X first, and allow content to scroll off the bottom of the screen for smaller phones. I looked at other sites and this seems to be the norm for users to scroll down for more content.
    A trick that I used to help with this was to set a minimum vh for the background image and text section. this kept things spaced out nicely, and responded to different screen heights.

3. When I created the large, orange "banners" that link to further content on services.html and methods.html, I wanted the text centred both horizontally and vertically.
    Researching found that it has often been an ongoing issue with vertical alignment. I found a little trick at [webdevblog](https://webdevblog.com/css-vertical-align) to set: **display: flex;**
    and **align-items: center;** which solved the problem for me.

### Bugs and Errors

There were many situations through the course of coding this project - mostly sizing and layout issues due to using Bootstrap plugins. These were usually padding or marging related and were overcome by using Safari Developer Tools too identify 
which part of the css styling needed to be adjusted to suit my own application.

for example 

    .col-xl-4 {
        max-width: 33.3%;
    }
    
    .col-xl-3 {
        max-width: 25%;
    }

To ensure that there was no unwanted wraparound of cards that I wished to fit the Bootstrap grid system.

I created more formal [Testing Matrices](https://github.com/StuChapman/UCD-MS-Project-Continuous-Engagement/blob/195ffade32fdce65d439bf33c1f11352de30da86/testing) 
to ensure that I could periodically test the features and rendering in a systematic way. This was fundamental as there are often small errors like types or missing margins
that aren't immediately obvious 

The first pass of ‘completion’ testing revealed some particular errors:
1.	The background image was incorrectly sized on contact.html – I corrected this by adjusting the max-height
2.  The headers on case-studies.html were the wrong colour on small media devices – I also corrected this.
3.  The menu links are supposed to change to a slightly darker colour to indicate that the user is currently visiting that particular page
    - this functionality has broken and all pages were showing "home" as the active page. I realised that I had made some adjustments to the navbar in index.html, and copied the code
    into each of the other pages without adjusting the active pages.
4.  On checking the infographics; I realised that I had not creted hyperlinks to the methods.html page form the contact.html page. I added the hyperlinks.

### Solutions to User Stories

[Screenshots](https://github.com/StuChapman/UCD-MS-Project-Continuous-Engagement/blob/195ffade32fdce65d439bf33c1f11352de30da86/screenshots) that address the different User Stories.

## Deployment

I deployed to Github Pages by the following steps:
1.	From the UCD-MS-Project-Continuous-Engagement repository in Github, click ‘Settings’
2.	Scroll down to ‘GitHub Pages’
3.	From the ‘source’ drop-down, select ‘master branch’
4.	The url was then presented to me as https://stuchapman.github.io/UCD-MS-Project-Continuous-Engagement/

#### To run the code locally;
1.	From the UCD-MS-Project-Continuous-Engagement repository in Github, click ‘Clone or download’
2.	Copy the URL to your clipboard
3.	In Gitpod, open the terminal
4.	Change the directory to that where you wish to place the files
5.	Type ‘git clone’ then paste the URL

## Credits



### Content

1.	The formula (calc(10px + (48 - 10) * ((100vw - 300px) / (1800 - 300)))) for responsive font sizing is 
    from [css-tricks](https://www.css-tricks.com/books/fundamental-css-tactics/scale-typography-screen-size/) and 
    [made by Mike](www.madebymike.com.au/writing/fluid-type-calc-examples/)
2.	The method for aligning text vertically is from [webdevblog](www.webdevblog.com/css-vertical-align/) 

### Media

1.	All images were taken from www.pexels.com 
    1. [neon-signage](https://www.pexels.com/photo/neon-signage-2681319/)
    2. [group-of-people-watching-on-laptop](https://www.pexels.com/photo/group-of-people-watching-on-laptop-1595385/)
    3. [books-business-computer-connection](https://www.pexels.com/photo/books-business-computer-connection-459654/)
    4. [working-in-a-group](https://www.pexels.com/photo/working-in-a-group-6224/)
2.	The infographics and ‘brand image’ were designed and created by me

### Acknowledgements

I would like to thank the following people for thier support and input:

1. My mentor, [Precious Ijege](https://www.linkedin.com/in/precious-ijege-908a00168/) for his knowledge and clear direction (it was he who made it very clear that a detailed set of mockups were vital - this is knowledge I will keep with me for the rest of my career!)
2. My partner, [Leah Harrison](https://www.facebook.com/leah.harrison.73744?eid=ARAmY9N1IiEptfP63TCAVnMZopPWxDv1tJL8BkuU9svBwDI3Eswr2C0RcoW-zx5We_ulMsujpIqL0-9B&timeline_context_item_type=intro_card_relationship&timeline_context_item_source=745641114) for the moral support and being my 'guinea pig' for live testing.
3. My friends [Scott](https://www.facebook.com/scott.mckellar.399) and [Magoo](https://www.facebook.com/carlos.fandango.56232), who I consulted before I started the FSD course, and gave me the confidence to go for it!
