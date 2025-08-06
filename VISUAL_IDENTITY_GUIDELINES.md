# 🎨 Radical Football - Visual Identity Guidelines

## 📸 **Young Player Image Usage Policy**

### **Primary Image Asset**
- **File:** `young-player.png` (with transparent background variant)
- **Usage Context:** Conference-related content and founder messages
- **Status:** Legacy asset with specific usage restrictions

---

## 🔹 **1. Variante posibile de folosire**

### **A. Imagine completă**
- **Poate apărea o singură dată în paginile de deschidere** (ex: conferință, mesaj fondator)
- **Se folosește fără text suprapus și fără elemente dinamice**
- **Context:** Hero sections, founder statements, conference landing pages

### **B. Siluetă sau contur**
- **Se poate folosi ca marcaj grafic** (pe carduri, profiluri fără poză, hartă comunitară)
- **Minimalist, într-o singură culoare**
- **Nu atrage atenția, doar susține direcția**
- **Context:** Profile placeholders, community map markers, subtle design elements

### **C. Fragment / decupaj**
- **În paginile de reflecție** (spirală, jurnal), poate apărea ca fundal difuz
- **Nu e nevoie să fie recunoscută clar**
- **Imaginea trebuie să susțină starea paginii, nu să o conducă**
- **Context:** Break spaces, reflection pages, journal backgrounds

### **D. Badge / semn vizual**
- **În footer, newsletter sau printuri** – poate funcționa ca o amprentă vizuală discretă
- **Niciodată nu e folosită ca logo sau marcă de identitate principală**
- **Context:** Footer, email signatures, print materials

---

## 🔹 **2. Reguli de ritm și apariție**

### **Frequency Rules**
- **Maxim 3–4 apariții clare în tot site-ul**
- **Nu trebuie să apară pe două pagini consecutive**
- **Se evită orice context de performanță sportivă**
- **Nu se asociază cu texte motivaționale, citate sau metafore**
- **Nu se folosește niciodată animat, rotit, editat în stil „cool"**

### **Implementation Guidelines**
```typescript
// Example usage in components
const YoungPlayerImage = {
  // Full image - only in conference/founder contexts
  full: {
    allowed: ['/conferences', '/ethos', '/start-here'],
    restrictions: ['no-text-overlay', 'no-animations', 'no-performance-context']
  },
  
  // Silhouette - subtle design element
  silhouette: {
    allowed: ['/map', '/community', 'profile-placeholders'],
    style: 'single-color', 'minimalist', 'supporting-role'
  },
  
  // Fragment - background in reflection spaces
  fragment: {
    allowed: ['break-spaces', 'reflection-pages', 'journal'],
    style: 'blurred', 'subtle', 'mood-supporting'
  },
  
  // Badge - discrete visual signature
  badge: {
    allowed: ['footer', 'newsletter', 'print'],
    style: 'small', 'discrete', 'never-primary-identity'
  }
};
```

---

## 🔹 **3. Spații deschise și dinamice**

### **Reflection Page Navigation**
În paginile de reflecție, pot exista opțiuni de navigare liberă:
- **„Revin mai târziu"** - Return later option
- **„Merg mai departe"** - Continue forward option  
- **„Nu sunt pregătit"** - Not ready option

### **Unusual Placement**
- **Figura poate apărea și în spații neobișnuite** (ex: confirmare înscriere, final articol)
- **Doar dacă are un sens acolo** - Only if it has meaning in that context
- **Examples:** Registration confirmation, article endings, unexpected moments

---

## 🎯 **Implementation Strategy**

### **Phase 1: Audit Current Usage**
1. **Identify all current instances** of young-player.png usage
2. **Map to new guidelines** and categorize by variant type
3. **Remove non-compliant usage** (performance contexts, motivational text, etc.)

### **Phase 2: Strategic Placement**
1. **Conference Pages** - Full image in hero sections
2. **Founder Messages** - Full image in ethos/principles
3. **Break Spaces** - Fragment/decupaj in reflection areas
4. **Community Map** - Silhouette for user markers
5. **Footer** - Badge as discrete signature

### **Phase 3: Technical Implementation**
```typescript
// Component for controlled image usage
interface YoungPlayerImageProps {
  variant: 'full' | 'silhouette' | 'fragment' | 'badge';
  context: string;
  className?: string;
  alt?: string;
}

const YoungPlayerImage = ({ variant, context, className, alt }: YoungPlayerImageProps) => {
  // Validate usage against guidelines
  const isValidUsage = validateUsage(variant, context);
  
  if (!isValidUsage) {
    console.warn(`Invalid usage of young-player.png: ${variant} in ${context}`);
    return null;
  }
  
  return (
    <img 
      src={`/images/young-player-${variant}.png`}
      alt={alt || 'Young player'}
      className={`young-player-${variant} ${className}`}
    />
  );
};
```

---

## 📋 **Usage Checklist**

### **Before Using the Image**
- [ ] **Is this one of the 3-4 clear appearances on the site?**
- [ ] **Is it not on a consecutive page from another usage?**
- [ ] **Is it avoiding performance/sports context?**
- [ ] **Is it not associated with motivational text?**
- [ ] **Is it not animated or "cool" styled?**
- [ ] **Does it have meaning in this specific context?**

### **Variant Selection**
- [ ] **Full Image** - Conference/founder hero sections only
- [ ] **Silhouette** - Subtle design elements, profiles, maps
- [ ] **Fragment** - Reflection pages, break spaces, journals
- [ ] **Badge** - Footer, newsletter, print materials

---

## 🚫 **Forbidden Usage**

### **Never Use When:**
- **Performance contexts** - Sports achievements, competition
- **Motivational text** - Quotes, inspirational messages
- **Consecutive pages** - Two pages in a row
- **Animated effects** - Rotations, cool animations
- **Primary branding** - As main logo or identity
- **More than 4 times** - Across entire site

### **Avoid Associations:**
- **Winning/losing** - Competition outcomes
- **Training drills** - Performance improvement
- **Success stories** - Achievement narratives
- **Goal scoring** - Sports performance
- **Team rankings** - Competitive contexts

---

## 📱 **Responsive Considerations**

### **Mobile Usage**
- **Full image** - May need cropping for mobile hero sections
- **Silhouette** - Ensure visibility at small sizes
- **Fragment** - Maintain subtlety across screen sizes
- **Badge** - Scale appropriately for footer/mobile

### **Accessibility**
- **Alt text** - Always provide meaningful descriptions
- **Contrast** - Ensure visibility in silhouette variants
- **Focus** - Don't interfere with navigation focus states

---

## 🔄 **Review Process**

### **Monthly Review**
1. **Audit current usage** against guidelines
2. **Remove non-compliant instances**
3. **Update documentation** with new patterns
4. **Train team** on updated guidelines

### **Before Launch**
1. **Final compliance check** across all pages
2. **Performance impact** assessment
3. **User experience** validation
4. **Accessibility** testing

---

*This document ensures the young-player.png image maintains its intended meaning and impact while respecting the business owner's vision for its usage across the Radical Football platform.*
