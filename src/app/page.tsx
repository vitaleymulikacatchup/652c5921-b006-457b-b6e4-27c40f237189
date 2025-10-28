"use client"

import { ThemeProvider } from "@/providers/ThemeProvider";
import NavbarLayoutFloatingOverlay from '@/components/navbar/NavbarLayoutFloatingOverlay/NavbarLayoutFloatingOverlay';
import HeroSplit from '@/components/sections/hero/HeroSplit';
import FeatureCardThree from '@/components/sections/feature/featureCardThree/FeatureCardThree';
import ProductCardOne from '@/components/sections/product/ProductCardOne';
import TestimonialCardOne from '@/components/sections/testimonial/TestimonialCardOne';
import SocialProofOne from '@/components/sections/socialProof/SocialProofOne';
import FaqDouble from '@/components/sections/faq/FaqDouble';
import BlogCardOne from '@/components/sections/blog/BlogCardOne';
import ContactSplit from '@/components/sections/contact/ContactSplit';
import FooterBase from '@/components/sections/footer/FooterBase';
import { Briefcase, Code, FileText, HelpCircle, Mail, Star, User } from 'lucide-react';

export default function Home() {
  return (
    <ThemeProvider
      defaultButtonVariant="slide-background"
      defaultTextAnimation="background-highlight"
      borderRadius="pill"
    >
      <div id="nav" data-section="nav">
        <NavbarLayoutFloatingOverlay
          navItems={[
            { name: "About", id: "about" },
            { name: "Skills", id: "skills" },
            { name: "Projects", id: "projects" },
            { name: "Testimonials", id: "testimonials" },
            { name: "Blog", id: "blog" },
            { name: "Contact", id: "contact" }
          ]}
          brandName="Romet Kriks"
          button={{
            text: "Hire Me",
            href: "contact"
          }}
        />
      </div>
      
      <div id="hero" data-section="hero">
        <HeroSplit
          title="Hi, I'm Romet Kriks"
          description="Full-stack developer and designer passionate about creating exceptional digital experiences that help businesses grow and succeed online."
          tag="Portfolio"
          tagIcon={User}
          buttons={[
            { text: "View My Work", href: "projects" },
            { text: "Get in Touch", href: "contact" }
          ]}
          imageSrc="https://images.pexels.com/photos/3184460/pexels-photo-3184460.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
          imageAlt="Professional portrait of Romet Kriks"
          imagePosition="right"
        />
      </div>
      
      <div id="skills" data-section="skills">
        <FeatureCardThree
          title="My Skills & Expertise"
          description="Specialized in modern technologies and proven methodologies to deliver outstanding results"
          tag="Skills"
          tagIcon={Code}
          features={[
            {
              id: "01",
              title: "Web Development",
              description: "Full-stack development with React, Node.js, and modern frameworks to build scalable web applications",
              imageSrc: "https://images.pexels.com/photos/4974922/pexels-photo-4974922.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Web development workspace"
            },
            {
              id: "02",
              title: "UI/UX Design",
              description: "User-centered design approach creating intuitive interfaces that enhance user experience and drive engagement",
              imageSrc: "https://images.pexels.com/photos/6373160/pexels-photo-6373160.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "UI/UX design mockups"
            },
            {
              id: "03",
              title: "Mobile Development",
              description: "Cross-platform mobile apps using React Native and Flutter for iOS and Android platforms",
              imageSrc: "https://images.pexels.com/photos/7947951/pexels-photo-7947951.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Mobile app development"
            }
          ]}
        />
      </div>
      
      <div id="projects" data-section="projects">
        <ProductCardOne
          title="Featured Projects"
          description="A showcase of my recent work and successful client collaborations"
          tag="Portfolio"
          tagIcon={Briefcase}
          products={[
            {
              id: "1",
              name: "E-commerce Platform",
              price: "Web App",
              imageSrc: "https://images.pexels.com/photos/8939806/pexels-photo-8939806.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "E-commerce platform dashboard",
              onProductClick: () => window.open('https://github.com/rometkriks', '_blank')
            },
            {
              id: "2",
              name: "Creative Portfolio",
              price: "Website",
              imageSrc: "https://images.pexels.com/photos/1779487/pexels-photo-1779487.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Creative portfolio website",
              onProductClick: () => window.open('https://github.com/rometkriks', '_blank')
            },
            {
              id: "3",
              name: "Banking Mobile App",
              price: "Mobile App",
              imageSrc: "https://images.pexels.com/photos/27522927/pexels-photo-27522927.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Mobile banking application",
              onProductClick: () => window.open('https://github.com/rometkriks', '_blank')
            }
          ]}
        />
      </div>
      
      <div id="testimonials" data-section="testimonials">
        <TestimonialCardOne
          title="What Clients Say"
          description="Feedback from satisfied clients who trusted me with their projects"
          tag="Reviews"
          tagIcon={Star}
          testimonials={[
            {
              id: "1",
              name: "Sarah Johnson",
              role: "CEO",
              company: "TechStart Inc",
              rating: 5,
              imageSrc: "https://images.pexels.com/photos/6894103/pexels-photo-6894103.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Portrait of Sarah Johnson"
            },
            {
              id: "2",
              name: "Michael Chen",
              role: "Founder",
              company: "InnovateLab",
              rating: 5,
              imageSrc: "https://images.pexels.com/photos/7414280/pexels-photo-7414280.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Portrait of Michael Chen"
            },
            {
              id: "3",
              name: "Emily Rodriguez",
              role: "CTO",
              company: "DigitalCorp",
              rating: 5,
              imageSrc: "https://images.pexels.com/photos/1181715/pexels-photo-1181715.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Portrait of Emily Rodriguez"
            },
            {
              id: "4",
              name: "David Kim",
              role: "Marketing Director",
              company: "GrowthCo",
              rating: 5,
              imageSrc: "https://images.pexels.com/photos/5990046/pexels-photo-5990046.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Portrait of David Kim"
            }
          ]}
        />
      </div>
      
      <div id="social-proof" data-section="social-proof">
        <SocialProofOne
          title="Trusted by Leading Companies"
          description="I've had the privilege to work with amazing companies and startups"
          logos={[
            "https://images.pexels.com/photos/9949424/pexels-photo-9949424.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
            "https://images.pexels.com/photos/10142683/pexels-photo-10142683.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
            "https://images.pexels.com/photos/9949426/pexels-photo-9949426.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
            "https://images.pexels.com/photos/9949424/pexels-photo-9949424.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
            "https://images.pexels.com/photos/267399/pexels-photo-267399.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
            "https://images.pexels.com/photos/2449452/pexels-photo-2449452.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
            "https://images.pexels.com/photos/9949424/pexels-photo-9949424.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
          ]}
          speed={30}
          showCard={true}
        />
      </div>
      
      <div id="faq" data-section="faq">
        <FaqDouble
          title="Frequently Asked Questions"
          description="Everything you need to know about working with me"
          tag="FAQ"
          tagIcon={HelpCircle}
          faqs={[
            {
              id: "1",
              title: "What technologies do you specialize in?",
              content: "I specialize in React, Next.js, Node.js, TypeScript, and modern CSS frameworks. I also work with mobile technologies like React Native and have experience with various databases and cloud services."
            },
            {
              id: "2",
              title: "How long does a typical project take?",
              content: "Project timelines vary based on scope and complexity. A simple website might take 2-4 weeks, while a complex web application could take 2-6 months. I provide detailed timelines during the initial consultation."
            },
            {
              id: "3",
              title: "Do you provide ongoing support?",
              content: "Yes, I offer ongoing support and maintenance packages to ensure your website or application continues to perform optimally. This includes updates, security patches, and feature enhancements."
            },
            {
              id: "4",
              title: "What is your development process?",
              content: "My process includes discovery and planning, design mockups, development phases with regular check-ins, testing, and deployment. I maintain clear communication throughout and provide regular progress updates."
            },
            {
              id: "5",
              title: "Can you help with existing projects?",
              content: "Absolutely! I can help improve, debug, or add features to existing projects. I'm comfortable working with various codebases and can quickly understand and contribute to ongoing projects."
            },
            {
              id: "6",
              title: "What are your payment terms?",
              content: "I typically work with a 50% upfront payment and 50% upon completion for smaller projects. For larger projects, I offer milestone-based payments. All terms are discussed and agreed upon before starting work."
            }
          ]}
        />
      </div>
      
      <div id="blog" data-section="blog">
        <BlogCardOne
          title="Latest Articles"
          description="Insights, tutorials, and thoughts on web development and design"
          tag="Blog"
          tagIcon={FileText}
          blogs={[
            {
              id: "1",
              category: "Development",
              title: "Building Modern Web Applications",
              excerpt: "A comprehensive guide to creating scalable and maintainable web applications using modern frameworks and best practices",
              imageSrc: "https://images.pexels.com/photos/4974922/pexels-photo-4974922.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Modern web development setup",
              authorName: "Romet Kriks",
              authorAvatar: "https://images.pexels.com/photos/3776969/pexels-photo-3776969.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              date: "15 Dec 2024"
            },
            {
              id: "2",
              category: "React",
              title: "Advanced React Patterns",
              excerpt: "Exploring advanced React patterns and techniques for building better component architectures and managing complex state",
              imageSrc: "https://images.pexels.com/photos/4164418/pexels-photo-4164418.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "React development",
              authorName: "Romet Kriks",
              authorAvatar: "https://images.pexels.com/photos/3776969/pexels-photo-3776969.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              date: "08 Dec 2024"
            },
            {
              id: "3",
              category: "Design",
              title: "Responsive Design Best Practices",
              excerpt: "Essential techniques for creating responsive designs that work seamlessly across all devices and screen sizes",
              imageSrc: "https://images.pexels.com/photos/34140/pexels-photo.jpg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Responsive design mockups",
              authorName: "Romet Kriks",
              authorAvatar: "https://images.pexels.com/photos/3776969/pexels-photo-3776969.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              date: "01 Dec 2024"
            }
          ]}
        />
      </div>
      
      <div id="contact" data-section="contact">
        <ContactSplit
          tag="Contact"
          tagIcon={Mail}
          title="Let's Work Together"
          description="Ready to bring your ideas to life? Get in touch and let's discuss your next project. I'd love to hear about your vision and how I can help make it a reality."
          inputPlaceholder="Your email address"
          buttonText="Send Message"
          termsText="I respect your privacy and will never share your information with third parties."
          imageSrc="https://images.pexels.com/photos/7394715/pexels-photo-7394715.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
          imageAlt="Modern workspace setup"
          mediaPosition="left"
        />
      </div>
      
      <div id="footer" data-section="footer">
        <FooterBase
          columns={[
            {
              title: "Services",
              items: [
                { label: "Web Development", href: "skills" },
                { label: "UI/UX Design", href: "skills" },
                { label: "Mobile Apps", href: "skills" },
                { label: "Consulting", href: "contact" }
              ]
            },
            {
              title: "Work",
              items: [
                { label: "Portfolio", href: "projects" },
                { label: "Case Studies", href: "projects" },
                { label: "Testimonials", href: "testimonials" }
              ]
            },
            {
              title: "Connect",
              items: [
                { label: "LinkedIn", href: "https://linkedin.com/in/rometkriks" },
                { label: "GitHub", href: "https://github.com/rometkriks" },
                { label: "Twitter", href: "https://twitter.com/rometkriks" },
                { label: "Email", href: "contact" }
              ]
            }
          ]}
          copyrightText="© 2024 Romet Kriks. All rights reserved."
        />
      </div>
    </ThemeProvider>
  );
}