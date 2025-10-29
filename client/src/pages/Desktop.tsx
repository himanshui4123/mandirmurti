import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";

const navigationItems = [
  { label: "HOME", href: "#" },
  { label: "ABOUT", href: "#" },
  { label: "Marble God Statue", href: "#" },
  { label: "Marble Goddess Statue", href: "#" },
  { label: "Marble Mandir", href: "#" },
  { label: "BLOGS", href: "#" },
  { label: "Contact Us", href: "#" },
];

const aboutStats = [
  {
    percentage: "95",
    label: "%Work",
    title: "Hand Crafting",
    description:
      "Pratistha passionately crafts moortis with ultimate skillset and accuracy. It has a legacy of Shilpkars who are involved in hand-forging of moortis.",
  },
  {
    percentage: "150",
    label: "+Years",
    title: "Moorti Age",
    description:
      "Pratistha passionately crafts moortis with ultimate skillset and accuracy. It has a legacy of Shilpkars who are involved in hand-forging of moortis.",
  },
  {
    percentage: "95",
    label: "%Work",
    title: "Customer Satisfaction",
    description:
      "Pratistha passionately crafts moortis with ultimate skillset and accuracy. It has a legacy of Shilpkars who are involved in hand-forging of moortis.",
  },
  {
    percentage: "150",
    label: "+Years",
    title: "Worldwide shipped",
    description:
      "Pratistha passionately crafts moortis with ultimate skillset and accuracy. It has a legacy of Shilpkars who are involved in hand-forging of moortis.",
  },
];

const productCategories = [
  { name: "Shiv Parivar", image: "/figmaAssets/ellipse-19-1.png" },
  { name: "Dhokra & Brass Art", image: "/figmaAssets/ellipse-20-1.png" },
  { name: "Ganpati", image: "/figmaAssets/ellipse-21-1.png" },
  { name: "God Statue", image: "/figmaAssets/ellipse-22-1.png" },
  { name: "Cow & Calf", image: "/figmaAssets/ellipse-23-1.png" },
];

const productCards = [
  {
    image: "/figmaAssets/rectangle-676-3.png",
    title: "Jain Crystal Semi Precious Statue",
    description:
      "This unique semi-precious Jain idol is perfect for collectors and devotees. An elegant fusion of devotion and fine materials.",
  },
  {
    image: "/figmaAssets/rectangle-677-3.png",
    title: "Jain Crystal Semi Precious Statue",
    description:
      "This unique semi-precious Jain idol is perfect for collectors and devotees. An elegant fusion of devotion and fine materials.",
  },
  {
    image: "/figmaAssets/rectangle-678-3.png",
    title: "Jain Crystal Semi Precious Statue",
    description:
      "This unique semi-precious Jain idol is perfect for collectors and devotees. An elegant fusion of devotion and fine materials.",
  },
];

const testimonials = [
  {
    name: "Tanu Dwivedi",
    image: "/figmaAssets/ellipse-24-3.png",
    rating: 5,
    review:
      "Sandhu FinServ has been managing my finances for years. Their expertise in...",
  },
  {
    name: "Anjali Dubey",
    image: "/figmaAssets/ellipse-25-3.png",
    rating: 5,
    review:
      "Good services, staff was very friendly less cost of management applicable ...",
  },
  {
    name: "Mahak G",
    image: "/figmaAssets/ellipse-26-3.png",
    rating: 5,
    review:
      "Would highly recommend Sandhu FinServ as one of the trusted name in...",
  },
  {
    name: "Soni Ashok G",
    image: "/figmaAssets/ellipse-27-3.png",
    rating: 5,
    review:
      "Sandhu FinServ has been managing my finances for years. Their expertise in...",
  },
];

const footerProducts = [
  "Ganesh Marble Statue",
  "Radha Krishna Marble Statue",
  "Ram Darbar Marble Statue",
  "Sai Baba Marble Statue",
  "Buddha Marble Statue",
  "Swami Narayan Marble Statue",
];

const footerCompanyLinks = [
  "Home",
  "About us",
  "Our Product",
  "Gallery",
  "Content Us",
];

const whyChoosePoints = [
  "Quality Marble: We use pure white and Makrana marble, known for its strength and elegance.",
  "Skilled Artisans: Our team comprises experienced and passionate marble god statue makers with generations of expertise.",
  "Customization Available: We offer custom designs and sizes based on your specific religious and aesthetic requirements.",
  "Timely Delivery: We provide a timely shipping facility in India and abroad.",
  "Competitive Pricing: Premium quality murtis at the best prices.",
];

const galleryImages = ["/figmaAssets/frame-33.svg"];

const newArrivalImages = ["/figmaAssets/frame-31.svg"];

export const Desktop = (): JSX.Element => {
  return (
    <div className="bg-white w-full min-w-[1440px] relative">
      <header className="sticky top-0 z-50 w-full bg-[#282828] shadow-[0px_6px_5px_#00000040]">
        <div className="container flex items-center justify-between h-[104px] px-6">
          <img
            className="w-[150px] h-[86px] object-cover"
            alt="Logo"
            src="/figmaAssets/image-179.png"
          />

          <nav className="flex items-center gap-6">
            {navigationItems.map((item, index) => (
              <a
                key={index}
                href={item.href}
                className="[font-family:'Inter',Helvetica] font-semibold text-white text-base tracking-[0] leading-[normal] hover:text-gray-300 transition-colors"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="relative w-[270px] h-[46px]">
            <Input
              className="w-full h-full bg-white rounded-[60px] shadow-[0px_1px_4px_#00000040] pl-[17px] pr-[70px] [font-family:'Inter',Helvetica] font-medium text-[#323232] text-[19px]"
              placeholder="Search"
            />
            <Button
              className="absolute right-0 top-0 w-[57px] h-[46px] bg-[#9a0f15] rounded-[0px_60px_60px_0px] hover:bg-[#7a0c11] p-0"
              size="icon"
            >
              <img
                className="w-[18px] h-[18px]"
                alt="Search"
                src="/figmaAssets/mask-group-5.png"
              />
            </Button>
          </div>
        </div>
      </header>

      <section className="relative w-full h-[550px]">
        <img
          className="absolute inset-0 w-full h-full object-cover"
          alt="Hero background"
          src="/figmaAssets/image-142.png"
        />
        <div className="absolute inset-0 bg-[#9a0f1594]" />
        <img
          className="absolute top-0 right-0 w-[720px] h-[500px] object-cover"
          alt="Hero statue"
          src="/figmaAssets/rectangle-672.png"
        />

        <div className="absolute top-[51px] left-[100px] w-[354px] h-12 bg-white flex items-center px-8">
          <span className="[font-family:'Inter',Helvetica] font-medium text-[#7a4ea3d9] text-[23px] tracking-[1.15px] leading-[normal]">
            Authentic Marble Moortis
          </span>
        </div>

        <h1 className="absolute top-[129px] left-24 w-[524px] [font-family:'Inter',Helvetica] font-extrabold text-white text-[50px] tracking-[2.50px] leading-[normal]">
          World&#39;s Best Marble Moorti Art Gallery.
        </h1>

        <p className="absolute top-[352px] left-[92px] [font-family:'Inter',Helvetica] font-medium text-white text-[21px] tracking-[1.05px] leading-[normal] whitespace-nowrap">
          Pratistha&apos;s precisely handcrafted Marble Moortis.
        </p>

        <Button className="absolute top-[425px] left-[104px] w-80 h-[54px] bg-white rounded-[30px] hover:bg-gray-100 text-[#323232] [font-family:'Inter',Helvetica] font-semibold text-xl tracking-[1.00px]">
          AMAZED? KNOW MORE!
        </Button>
      </section>

      <section className="py-[47px] bg-white">
        <div className="container px-[102px]">
          <Button className="w-[146px] h-[54px] bg-[#630b0f] hover:bg-[#4a0809] [font-family:'Inter',Helvetica] font-extrabold text-white text-lg tracking-[0] leading-[normal]">
            ABOUT US
          </Button>

          <h2 className="mt-10 [font-family:'Inter',Helvetica] font-extrabold text-[#323232] text-[46px] tracking-[2.30px] leading-[normal]">
            From Stone to Soul — The Journey of Divine Art.
          </h2>

          <div className="mt-[90px] grid grid-cols-1 gap-[175px]">
            <div className="flex items-start gap-[150px]">
              <img
                className="w-[526px] h-[693px] rounded-[15px] object-cover"
                alt="About image"
                src="/figmaAssets/rectangle-703.png"
              />

              <div className="flex-1 space-y-[175px]">
                {aboutStats.map((stat, index) => (
                  <div key={index} className="flex items-start gap-[150px]">
                    <div className="relative w-[125px] h-[125px]">
                      <img
                        className="w-full h-full"
                        alt="Circle"
                        src="/figmaAssets/ellipse-15.svg"
                      />
                      <div className="absolute inset-0 flex flex-col items-center justify-center">
                        <span className="[font-family:'Inter',Helvetica] font-extrabold text-[#380568] text-base text-center tracking-[0.80px] leading-6">
                          {stat.percentage}
                          <br />
                        </span>
                        <span className="[font-family:'Inter',Helvetica] font-extrabold text-black text-base text-center tracking-[0.80px] leading-6">
                          {stat.label}
                        </span>
                      </div>
                    </div>

                    <div className="flex-1">
                      <h3 className="[font-family:'Inter',Helvetica] font-extrabold text-[#380568bf] text-[34px] tracking-[1.70px] leading-[normal]">
                        {stat.title}
                      </h3>
                      <p className="mt-[46px] [font-family:'Inter',Helvetica] font-semibold text-[#323232] text-base tracking-[0.80px] leading-6">
                        {stat.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-[28px] bg-white">
        <div className="container px-[102px]">
          <h2 className="text-center [font-family:'Jomolhari',Helvetica] font-normal text-[#9a0f15] text-[44px] tracking-[2.20px] leading-[normal]">
            Our Products Categories
          </h2>
          <div className="mt-[44px] w-full h-1 bg-[#9a0f15] mx-auto max-w-[295px]" />

          <ScrollArea className="mt-[82px] w-full">
            <div className="flex gap-2.5 pb-4">
              {[...productCategories, ...productCategories].map(
                (category, index) => (
                  <div
                    key={index}
                    className="flex flex-col items-center gap-5 min-w-[232px]"
                  >
                    <img
                      className="w-[232px] h-[232px] object-cover rounded-full cursor-pointer hover:opacity-80 transition-opacity"
                      alt={category.name}
                      src={category.image}
                    />
                    <span className="[font-family:'Inter',Helvetica] font-bold text-[#323232] text-[22px] tracking-[0] leading-[normal]">
                      {category.name}
                    </span>
                  </div>
                ),
              )}
            </div>
            <ScrollBar orientation="horizontal" />
          </ScrollArea>
        </div>
      </section>

      <section className="relative py-[156px]">
        <img
          className="absolute inset-0 w-full h-[600px] object-cover"
          alt="Background"
          src="/figmaAssets/rectangle-714.png"
        />
        <div className="absolute inset-0 w-full h-[600px] bg-[#bb4b5096]" />

        <div className="relative container px-[102px] flex justify-center">
          <div className="w-[120px] h-[120px] bg-white rounded-[60px] flex items-center justify-center">
            <img
              className="w-[50px] h-[50px] object-cover"
              alt="Play icon"
              src="/figmaAssets/image-165.png"
            />
          </div>
        </div>
      </section>

      <section className="py-[118px] bg-white">
        <div className="container px-[102px]">
          <div className="flex items-center justify-center gap-4">
            <img
              className="w-[300px] h-[300px] object-cover"
              alt="Featured product"
              src="/figmaAssets/image-143.png"
            />
          </div>

          <h2 className="mt-[43px] text-center [font-family:'Jomolhari',Helvetica] font-normal text-[#9a0f15] text-[44px] tracking-[2.20px] leading-[normal]">
            Our Popular Products
          </h2>
          <div className="mt-[43px] w-[295px] h-1 bg-[#9a0f15] mx-auto" />

          <ScrollArea className="mt-[200px] w-full">
            <div className="flex gap-5 pb-4">
              {[...productCards, ...productCards].map((product, index) => (
                <Card
                  key={index}
                  className="min-w-[400px] rounded-[30px] shadow-[0px_-7px_47px_#00000040] overflow-hidden"
                >
                  <CardContent className="p-0">
                    <img
                      className="w-full h-[354px] object-cover"
                      alt={product.title}
                      src={product.image}
                    />
                    <div className="p-[17px] pb-[16px]">
                      <h3 className="text-center [font-family:'Jomolhari',Helvetica] font-normal text-black text-[37px] tracking-[1.85px] leading-[46.2px]">
                        {product.title}
                      </h3>
                      <p className="mt-2.5 text-center [font-family:'Jomolhari',Helvetica] font-normal text-[#323232] text-[19px] tracking-[0.95px] leading-[27.5px]">
                        {product.description}
                      </p>
                      <Button className="mt-[26px] w-full h-[52px] bg-[#9a0f15] hover:bg-[#7a0c11] rounded-md [font-family:'Jomolhari',Helvetica] font-normal text-white text-[32px] tracking-[1.60px]">
                        DETAILS
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
            <ScrollBar orientation="horizontal" />
          </ScrollArea>

          <ScrollArea className="mt-[700px] w-full">
            <div className="flex gap-5 pb-4">
              {[...productCards, ...productCards].map((product, index) => (
                <Card
                  key={index}
                  className="min-w-[400px] rounded-[30px] shadow-[0px_-7px_47px_#00000040] overflow-hidden"
                >
                  <CardContent className="p-0">
                    <img
                      className="w-full h-[354px] object-cover"
                      alt={product.title}
                      src={product.image}
                    />
                    <div className="p-[17px] pb-[16px]">
                      <h3 className="text-center [font-family:'Jomolhari',Helvetica] font-normal text-black text-[37px] tracking-[1.85px] leading-[46.2px]">
                        {product.title}
                      </h3>
                      <p className="mt-2.5 text-center [font-family:'Jomolhari',Helvetica] font-normal text-[#323232] text-[19px] tracking-[0.95px] leading-[27.5px]">
                        {product.description}
                      </p>
                      <Button className="mt-[26px] w-full h-[52px] bg-[#9a0f15] hover:bg-[#7a0c11] rounded-md [font-family:'Jomolhari',Helvetica] font-normal text-white text-[32px] tracking-[1.60px]">
                        DETAILS
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
            <ScrollBar orientation="horizontal" />
          </ScrollArea>
        </div>
      </section>

      <section className="py-[104px] bg-white">
        <div className="container px-[102px]">
          <h2 className="text-center [font-family:'Jomolhari',Helvetica] font-normal text-[#9a0f15] text-[44px] tracking-[2.20px] leading-[normal]">
            New Arrival
          </h2>
          <div className="mt-[25px] w-56 h-1 bg-[#9a0f15] mx-auto" />
          <p className="mt-[25px] text-center [font-family:'Inter',Helvetica] font-normal text-black text-[19px] tracking-[0.95px] leading-[normal]">
            See our latest products
          </p>

          <div className="mt-[34px]">
            <img
              className="w-full h-[398px]"
              alt="New arrivals"
              src="/figmaAssets/frame-31.svg"
            />
          </div>
        </div>
      </section>

      <section className="py-[105px] bg-[#c47477] shadow-[0px_3px_15px_#00000040]">
        <div className="container px-[100px]">
          <div className="flex gap-[213px]">
            <div className="flex-1">
              <h2 className="[text-shadow:0px_3px_1px_#00000040] [font-family:'Jomolhari',Helvetica] font-normal text-black text-[32px] tracking-[1.60px] leading-[normal]">
                WHY CHOOSE&nbsp;&nbsp;MANDIRMOORTI ARTS?
              </h2>
              <p className="mt-[71px] [font-family:'Inter',Helvetica] font-medium text-white text-lg tracking-[0.90px] leading-10">
                As a leading marble statue manufacturer in Jaipur, we combine
                craftsmanship
                <br />
                with modern techniques to deliver unmatched quality and design.
                Here are <br />
                what sets us apart:
              </p>
              <div className="mt-[139px] [font-family:'Inter',Helvetica] font-medium text-white text-lg tracking-[0.90px] leading-[48px]">
                {whyChoosePoints.map((point, index) => (
                  <p key={index}>{point}</p>
                ))}
              </div>
            </div>

            <img
              className="w-[487px] h-[653px] rounded-[30px_0px_30px_0px] object-cover"
              alt="Why choose us"
              src="/figmaAssets/image-144.png"
            />
          </div>
        </div>
      </section>

      <section className="py-[115px] bg-white">
        <div className="container px-[100px]">
          <h2 className="text-center [font-family:'Jomolhari',Helvetica] font-normal text-[#9a0f15] text-[44px] tracking-[2.20px] leading-[normal]">
            Gallery
          </h2>
          <div className="mt-[81px] w-[127px] h-1 bg-[#9a0f15] mx-auto" />

          <div className="mt-[44px]">
            <img
              className="w-full h-[398px]"
              alt="Gallery"
              src="/figmaAssets/frame-33.svg"
            />
          </div>
        </div>
      </section>

      <section className="py-[55px] bg-[#9a0f1594]">
        <div className="container px-[100px]">
          <h2 className="text-center [font-family:'Jomolhari',Helvetica] font-normal text-[#323232] text-[44px] tracking-[2.20px] leading-[normal]">
            What Our Customers Say
          </h2>
          <div className="mt-[81px] w-[127px] h-1 bg-[#9a0f15] mx-auto" />

          <ScrollArea className="mt-[43px] w-full">
            <div className="flex gap-5 pb-4">
              {[...testimonials, ...testimonials].map((testimonial, index) => (
                <Card
                  key={index}
                  className="min-w-[295px] h-[300px] bg-white rounded-[5px] shadow-[0px_0px_6px_#00000040]"
                >
                  <CardContent className="p-5">
                    <div className="flex items-start gap-[15px]">
                      <img
                        className="w-20 h-20 object-cover rounded-full"
                        alt={testimonial.name}
                        src={testimonial.image}
                      />
                      <h3 className="mt-[23px] [font-family:'Jomolhari',Helvetica] font-normal text-[#323232] text-[22px] tracking-[1.10px] leading-[normal]">
                        {testimonial.name}
                      </h3>
                    </div>

                    <div className="flex gap-[2px] mt-[21px]">
                      {Array.from({ length: testimonial.rating }).map(
                        (_, i) => (
                          <img
                            key={i}
                            className="w-[21px] h-[21px] object-cover"
                            alt="Star"
                            src="/figmaAssets/image-149-3.png"
                          />
                        ),
                      )}
                    </div>

                    <p className="mt-[20px] [font-family:'Inter',Helvetica] font-normal text-[#323232] text-[17px] tracking-[1.53px] leading-6">
                      {testimonial.review}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
            <ScrollBar orientation="horizontal" />
          </ScrollArea>
        </div>
      </section>

      <footer className="bg-[#323232] pt-[25px] pb-[64px]">
        <div className="container px-[82px]">
          <div className="flex gap-[100px]">
            <div className="flex-1">
              <img
                className="w-[300px] h-[171px] object-cover"
                alt="Footer logo"
                src="/figmaAssets/image-179.png"
              />
              <p className="mt-[40px] [font-family:'Inter',Helvetica] font-medium text-white text-lg tracking-[0.90px] leading-6">
                Gourav Arts | Handcrafted Marble Statues | Since 1992 Bring home
                timeless spirituality with premium Makrana, Vietnam &amp; Ambaji
                marble murtis — crafted in the heart of Jaipur.
              </p>

              <div className="flex gap-[10px] mt-[162px]">
                <img
                  className="w-[68px] h-[68px]"
                  alt="Facebook"
                  src="/figmaAssets/mask-group.png"
                />
                <img
                  className="w-[68px] h-[68px]"
                  alt="Instagram"
                  src="/figmaAssets/mask-group-1.png"
                />
                <img
                  className="w-[68px] h-[68px]"
                  alt="Twitter"
                  src="/figmaAssets/mask-group-2.png"
                />
              </div>
            </div>

            <div className="flex flex-col">
              <h3 className="[font-family:'Inknut_Antiqua',Helvetica] font-bold text-white text-[28px] tracking-[1.40px] leading-[normal]">
                Products
              </h3>
              <div className="mt-[13px] space-y-[13px]">
                {footerProducts.map((product, index) => (
                  <a
                    key={index}
                    href="#"
                    className="block [font-family:'Inter',Helvetica] font-normal text-white text-2xl tracking-[1.20px] leading-[41px] hover:text-gray-300 transition-colors"
                  >
                    {product}
                  </a>
                ))}
              </div>
            </div>

            <div className="flex flex-col">
              <h3 className="[font-family:'Inknut_Antiqua',Helvetica] font-bold text-white text-[28px] tracking-[1.40px] leading-[normal]">
                Company
              </h3>
              <div className="mt-[20px] space-y-[15px]">
                {footerCompanyLinks.map((link, index) => (
                  <a
                    key={index}
                    href="#"
                    className="block [font-family:'Inter',Helvetica] font-normal text-white text-2xl tracking-[1.20px] leading-[normal] hover:text-gray-300 transition-colors"
                  >
                    {link}
                  </a>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-[26px] h-0.5 bg-[#d9d9d9ed]" />

          <div className="flex items-center justify-between mt-[18px]">
            <div className="flex items-center gap-[10px]">
              <div className="w-[30px] h-[30px] bg-[url(/figmaAssets/mask-group-8.png)] bg-[100%_100%]" />
              <span className="[font-family:'Inter',Helvetica] font-normal text-white text-lg tracking-[0.90px] leading-[normal]">
                +91 123 456 7890
              </span>
            </div>

            <div className="flex items-center gap-[10px]">
              <div className="w-[30px] h-[30px] bg-[url(/figmaAssets/mask-group-7.png)] bg-[100%_100%]" />
              <span className="[font-family:'Inter',Helvetica] font-normal text-white text-lg tracking-[0.90px] leading-[normal]">
                Get Directions
              </span>
            </div>

            <div className="flex items-center gap-[10px]">
              <div
                className="w-[30px] h-[
30px] bg-[url(/figmaAssets/mask-group-6.png)] bg-[100%_100%]"
              />
              <span className="[font-family:'Inter',Helvetica] font-normal text-white text-lg tracking-[0.90px] leading-[normal]">
                thenaturejaipur@gmail.com
              </span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};
