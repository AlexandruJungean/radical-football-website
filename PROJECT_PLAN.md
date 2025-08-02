# ⚽ Radical Football Website - Project Plan

## 📋 Project Overview
**Website:** Radical Football  
**Type:** Community-driven Football Education Movement  
**Tech Stack:** Next.js 14, TypeScript, Tailwind CSS, Local Fonts (Poppins + Sonny Gothic)

---

## 🏠 **HOMEPAGE** (`/`)
### Hero Section
- [ ] **Layered Background Design:** `sliding-tackle.png` (young player in action) overlaid on `logo-icon.png` (branded background)
- [ ] **Animated Headline:** "Empowering Young Players Through Football" with staggered text animation
- [ ] Geometric shapes that move on scroll (like the image example)
- [ ] **Event Information Card:** Floating card with conference details (16-17 August, Hotel Impero, Oradea) - links to `/conferences/[slug]`
- [ ] Simple, friendly introduction to our movement
- [ ] **Call-to-Action Buttons:** "Buy Ticket" and "View More →" with hover animations
- [ ] **Particle Effects:** Floating footballs or geometric elements in the background
- [ ] **Design Notes:** 
  - `sliding-tackle.png` shows intense action and determination
  - `logo-icon.png` provides branded background with gradient colors
  - Layered effect creates depth and visual interest

### Our Partners & Sponsors
- [ ] Sponsor logos section (white logos on dark background)
- [ ] Thank you message to partners
- [ ] Partnership opportunities
- [ ] **Logo Specifications:** 60-80px height, SVG format, white logos
- [ ] **Design:** Dark blue background (#36586F) with white logos
- [ ] **Layout:** Responsive grid (4-6 logos per row on desktop)
- [ ] **Effects:** Hover animations with subtle glow and scale

### What We're About
- [ ] Simple explanation of Radical Football
- [ ] Why we focus on children first
- [ ] What makes us different

### Our Founder
- [ ] **Flavius Andrișca** - Founder profile with authentic photo
- [ ] Personal story and motivation behind Radical Football
- [ ] Authentic description of his vision and journey
- [ ] Connection to the movement's philosophy

### Our Values
- [ ] **Relație (Relationship)** - Building meaningful connections
- [ ] **Educație (Education)** - Learning and growth through football
- [ ] **Joc (Play)** - The joy and importance of play
- [ ] **Comunitate (Community)** - Building strong communities together
- [ ] Visual representation of each value with icons or illustrations

### Conference Preview
- [ ] What to expect at our conference
- [ ] Why you should come
- [ ] What you'll learn and experience

### Community Highlights
- [ ] Real stories from people in our community
- [ ] How we're making a difference together

### Resources Spotlight
- [ ] Latest article, podcast, video, or magazine issue
- [ ] Link to resources section

---

## 👤 **ABOUT PAGE** (`/about`)
### Our Story
- [ ] How Radical Football began
- [ ] The people behind the movement
- [ ] Our journey so far

### What We Believe
- [ ] Our core values (child-centered, relationships before results, etc.)
- [ ] What drives us
- [ ] Our hopes and dreams

### Our Code of Ethics
- [ ] The principles we live by
- [ ] Downloadable ethical code (PDF)

---

## 🎓 **CONFERENCE PAGE** (`/conferences`)
### Conference Overview
- [ ] **General presentation** of the concept and format (theory + practice)
- [ ] **What makes us different** from other conferences
- [ ] **What it means to participate** (as guest, speaker, volunteer)
- [ ] **Conference format** explanation

### Current Conference
- [ ] **Featured current conference** with banner and key details
- [ ] **Conference preview** with highlights and speakers
- [ ] **Call-to-action** to view full details
- [ ] **Link to individual conference page** (`/conferences/[slug]`)
- [ ] **Quick registration** or ticket purchase option

### Past Conferences
- [ ] **Conference archive** with year-based navigation
- [ ] **Individual conference cards** for each past edition
- [ ] **Photos and video highlights** from past events
- [ ] **Complete programs** from previous years
- [ ] **Speaker lists** from past conferences
- [ ] **Partners and sponsors** from each edition
- [ ] **Testimonials and memorable quotes** from participants

### Individual Conference Pages (`/conferences/[slug]`)
- [ ] **Conference banner** with year and theme
- [ ] **Detailed description** of the specific edition
- [ ] **Complete schedule** and program
- [ ] **Ticket purchasing** and registration
- [ ] **Speaker profiles** and presentations (4-7 speakers per conference)
- [ ] **Conference sponsors** section
- [ ] **Post-event gallery** (photos and videos)
- [ ] **Testimonials** from that specific event

### Speaker Section Details
- [ ] **Speaker cards** with photos and brief bios
- [ ] **Presentation titles** and descriptions
- [ ] **Speaker expertise** and background
- [ ] **Session times** and locations
- [ ] **Speaker social media** links (optional)
- [ ] **Speaker grid layout** (2-3 speakers per row on desktop)

### Confirmed Speakers (2024 Conference)
- [ ] **Peter Sturgess** - 20-word description needed
- [ ] **Bastiaan Riemersma** - 20-word description needed
- [ ] **Neil Harris** - 20-word description needed
- [ ] **Mark O'Sullivan** - 20-word description needed
- [ ] **Debbie Sayers** - 20-word description needed
- [ ] **Rick Fenoglio** - 20-word description needed
- [ ] **Jan Verbeek** - 20-word description needed
- [ ] **Andrei Zaporojan** - 20-word description needed
- [ ] **Martin VLK** - 20-word description needed
- [ ] **Aslan Odev** - 20-word description needed
- [ ] **Speaker Images:** 600x600 PNG format for each speaker

---

## 🌍 **COMMUNITY PAGE** (`/community`)
### Committee Board
- [ ] **Clear and elegant presentation** of board members
- [ ] **Member profiles** with photo, name, affiliation, symbolic role
- [ ] **Flavius Andrișca** - Founder and Board Member
- [ ] **Symbolic roles** (e.g., "honorary co-founder", "thematic consultant", "speaker selection mentor")
- [ ] **Board mission explanation**: "A group of people who support us in maintaining the pedagogical and human relevance of the conference, year after year."
- [ ] **Future feature**: possibility for applications or nominations

### Official Romania Ambassador
- [ ] **Ionuț Rada** - Official Romania Ambassador
- [ ] **Professional photo** and profile
- [ ] **Personal text** about what his role means
- [ ] **His role in the conference**, community, and supporting Romanian coaches

### Community Stories
- [ ] Real stories from coaches, parents, volunteers
- [ ] How we're making a difference together

### Where We Are
- [ ] Map showing our community
- [ ] Cities and clubs we work with

### Our Volunteers & Contributors
- [ ] The amazing people who help us
- [ ] Translators, collaborators, supporters

---

## 📚 **RESOURCES & MAGAZINE PAGE** (`/resources`)
### Our Library
- [ ] Articles from database (with mock data from Google Drive during development)
- [ ] Studies and research
- [ ] Materials for practice
- [ ] Podcasts and conversations
- [ ] Videos and interviews (with mock data from YouTube during development)

### Our Magazine
- [ ] Latest issue
- [ ] Stories, interviews, case studies
- [ ] Community voices

### Reading Lists
- [ ] Books for beginners
- [ ] Books for experienced practitioners

### Development Notes
- **Mock Data Source:** https://docs.google.com/document/d/1RBP3zXDOfcNpgm8_eQ-F8X4Jw_FFbcE9Ux5TYUWsEsI/edit?usp=drive_link
- **Mock Video Source:** https://www.youtube.com/watch?v=vkLNYFqlCdQ
- **Database Integration:** Articles and videos will be fetched from database in production
- **Content Management:** Easy article and video addition and editing system

---

## 🤝 **GET INVOLVED PAGE** (`/get-involved`)
### Join Our Team
- [ ] Become a speaker
- [ ] Volunteer with us
- [ ] Help with translations

### Share Your Story
- [ ] Tell us your experiences
- [ ] Write articles or suggest topics
- [ ] Help plan future events

### What Others Have Done
- [ ] Examples of community contributions

---

## 📅 **CALENDAR PAGE** (`/calendar`)
### What's Coming Up
- [ ] Workshops, training sessions, camps
- [ ] Details for each event

### Stay Updated
- [ ] Sign up for our newsletter

---

## 📞 **CONTACT PAGE** (`/contact`)
### Get in Touch
- [ ] Where to find us
- [ ] Phone numbers
- [ ] Email addresses
- [ ] When we're available

### Contact Form
- [ ] General questions
- [ ] Conference and ticket help
- [ ] Media inquiries
- [ ] Partnership opportunities

### Find Us
- [ ] Interactive map
- [ ] How to get here
- [ ] Public transport options

---

## 📝 **NOTES**
- Keep language warm, friendly, and human
- Focus on community and connection
- Avoid corporate or marketing language

---

## 📋 **TECHNICAL REFERENCE**
For technical specifications, asset inventory, design system, and implementation details, see: **[TECHNICAL_SPECIFICATIONS.md](./TECHNICAL_SPECIFICATIONS.md)**