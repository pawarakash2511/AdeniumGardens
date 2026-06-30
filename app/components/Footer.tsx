import Image from "next/image";
import { Instagram, Facebook, Linkedin, Phone, Mail } from "lucide-react";
import { NAV_ITEMS, FOOTER, CONTACT } from "@/lib/content";
import { LOGO_SRC } from "@/lib/assets";

export default function Footer() {
  return (
    <footer className="bg-garden-dark text-white/70 py-16 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 pb-12 border-b border-white/10">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <Image
                src={LOGO_SRC}
                alt="Adenium Gardens"
                width={44}
                height={44}
                className="object-contain"
              />
              <div>
                <p className="text-white font-display font-medium leading-tight text-sm">
                  Adenium Gardens
                </p>
                <p className="text-garden-gold text-xs">Private Limited</p>
              </div>
            </div>
            <p className="text-sm leading-relaxed font-body max-w-xs">{FOOTER.tagline}</p>
            <div className="flex gap-4 mt-6">
              <a
                href="#"
                aria-label="Instagram"
                className="w-11 h-11 rounded-full border border-white/20 flex items-center justify-center hover:border-garden-gold hover:text-garden-gold transition-colors"
              >
                <Instagram size={16} />
              </a>
              <a
                href="#"
                aria-label="Facebook"
                className="w-11 h-11 rounded-full border border-white/20 flex items-center justify-center hover:border-garden-gold hover:text-garden-gold transition-colors"
              >
                <Facebook size={16} />
              </a>
              <a
                href="#"
                aria-label="LinkedIn"
                className="w-11 h-11 rounded-full border border-white/20 flex items-center justify-center hover:border-garden-gold hover:text-garden-gold transition-colors"
              >
                <Linkedin size={16} />
              </a>
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="text-white font-display font-medium text-sm mb-5 uppercase tracking-widest">
              Quick Links
            </h4>
            <nav className="flex flex-col gap-3">
              {NAV_ITEMS.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="text-sm hover:text-garden-gold transition-colors font-body"
                >
                  {item.label}
                </a>
              ))}
            </nav>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-display font-medium text-sm mb-5 uppercase tracking-widest">
              Contact
            </h4>
            <div className="flex flex-col gap-4">
              <a
                href={`tel:${CONTACT.phone.replace(/-/g, "")}`}
                className="flex items-center gap-3 text-sm hover:text-garden-gold transition-colors font-body"
              >
                <Phone size={14} className="text-garden-gold flex-shrink-0" />
                {CONTACT.phone}
              </a>
              <a
                href={`mailto:${CONTACT.email}`}
                className="flex items-center gap-3 text-sm hover:text-garden-gold transition-colors font-body"
              >
                <Mail size={14} className="text-garden-gold flex-shrink-0" />
                {CONTACT.email}
              </a>
              <p className="text-xs leading-relaxed font-body mt-2">
                Mumbai · Bangalore · Kolkata<br />
                Ahmedabad · Gurgaon · Pune
              </p>
            </div>
          </div>
        </div>

        <div className="pt-8 text-center text-xs font-body">
          {FOOTER.copyright}
        </div>
      </div>
    </footer>
  );
}
