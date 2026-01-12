import Header from '@/components/header'
import HeroSection from '@/components/hero-section'
import type { NavigationSection } from '@/components/menu-navigation'
import ContentSection from '@/components/about-section'
import TestimonialsComponent from '@/components/testimonials-component'
import type { TestimonialItem } from '@/components/testimonials-component'
import FooterSection from '@/components/footer'
import MenuSection from '@/components/menu-section'
import foodIMG from '@/assets/food.jpg'
import FindUsSection from '@/components/find-us-section'

const navigationData: NavigationSection[] = [
  {
    title: 'Home',
    href: '#'
  },
  {
    title: 'About Us',
    href: '#'
  },
  {
    title: 'Menu',
    href: '#Menu'
  },
  {
    title: 'Testimonials',
    href: '#'
  },
  {
    title: 'Find us',
    href: '#'
  }
]

const menudata = [
  {
    id: 1,
    img: 'https://cdn.shadcnstudio.com/ss-assets/template/landing-page/bistro/image-18.png',
    imgAlt: 'plate-1',
    userComment: 'The ambiance is perfect and the food is absolutely delicious. Highly recommended!',
    userAvatar: 'https://cdn.shadcnstudio.com/ss-assets/avatar/avatar-56.png'
  },
  {
    id: 2,
    img: 'https://cdn.shadcnstudio.com/ss-assets/template/landing-page/bistro/image-19.png',
    imgAlt: 'plate-2',
    userComment: 'Best dining experience in town. The staff is friendly and the menu is exceptional.',
    userAvatar: 'https://cdn.shadcnstudio.com/ss-assets/avatar/avatar-46.png'
  },
  {
    id: 3,
    img: 'https://cdn.shadcnstudio.com/ss-assets/template/landing-page/bistro/image-20.png',
    imgAlt: 'plate-3',
    userComment: 'Every dish is crafted with care. This place never disappoints!',
    userAvatar: 'https://cdn.shadcnstudio.com/ss-assets/avatar/avatar-57.png'
  },
  {
    id: 4,
    img: 'https://cdn.shadcnstudio.com/ss-assets/template/landing-page/bistro/image-05.png',
    imgAlt: 'plate-4',
    userComment: 'Great atmosphere and incredible flavors. A must-visit restaurant!',
    userAvatar: 'https://cdn.shadcnstudio.com/ss-assets/avatar/avatar-58.png'
  },
  {
    id: 5,
    img: 'https://cdn.shadcnstudio.com/ss-assets/template/landing-page/bistro/image-20.png',
    imgAlt: 'plate-3',
    userComment: 'Every dish is crafted with care. This place never disappoints!',
    userAvatar: 'https://cdn.shadcnstudio.com/ss-assets/avatar/avatar-57.png'
  }
]

const testimonials: TestimonialItem[] = [
  {
    name: 'Craig Bator',
    role: 'Food Enthusiast',
    company: '',
    avatar: 'https://cdn.shadcnstudio.com/ss-assets/avatar/avatar-46.png',
    rating: 5,
    content: "DIBS Restaurant is my go-to for an exceptional dining experience. Every dish is perfectly crafted and bursting with flavor."
  },
  {
    name: 'Martin Dorwart',
    role: 'Local Blogger',
    company: '',
    avatar: 'https://cdn.shadcnstudio.com/ss-assets/avatar/avatar-57.png',
    rating: 4,
    content: "I love the ambiance at DIBS. The service is friendly, and the menu always surprises me with something unique and delicious."
  },
  {
    name: 'Sarah Johnson',
    role: 'Food Critic',
    company: '',
    avatar: 'https://cdn.shadcnstudio.com/ss-assets/avatar/avatar-59.png',
    rating: 5,
    content:
      "The presentation and flavors at DIBS Restaurant are top-notch. It's evident they put a lot of care into every dish."
  },
  {
    name: 'Alex Chen',
    role: 'Regular Customer',
    company: '',
    avatar: 'https://cdn.shadcnstudio.com/ss-assets/avatar/avatar-41.png',
    rating: 4,
    content:
      "Dining at DIBS is always a pleasure. The food quality is consistent, the staff is welcoming, and the atmosphere is cozy yet elegant."
  }
] 

const Page = () => {
  return (
    <div className='overflow-x-hidden'>
      {/* Header Section */}
      <Header navigationData={navigationData} />

      {/* Main Content */}
      <section className='flex flex-col pt-17.5'>
        <HeroSection menudata={menudata} />
      </section>

      <section>
        <div>
          <ContentSection />
        </div>
      </section>

      <section
        id="menu"
        className="relative py-40 text-center text-white"
        style={{
          backgroundImage: `url(${foodIMG.src})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed',
        }}
      >
        <div className="absolute inset-0 bg-black/60">
          <div className="relative z-10">
            <MenuSection />
          </div>
        </div>
      </section>

      <section id="find-us" className="bg-primary">
        <FindUsSection />
      </section>

      <section>
        <div>
          <TestimonialsComponent testimonials={testimonials} />
        </div>
      </section>

      <section>
        <div>
          <FooterSection />
        </div>
      </section>

    </div>
  )
}

export default Page
