'use client';

import clsx from 'clsx';
import { Mail, MapPin, Phone } from 'lucide-react';
import { useState, useRef, useEffect } from 'react';

import style from './ContactInfo.module.scss';

const icons = {
  phone: <Phone size={14} />,
  email: <Mail size={14} />,
  address: <MapPin size={14} />,
};

export type ContactItem = {
  type: keyof typeof icons;
  text: string;
  href?: string;
};

export function ContactInfo({ items }: { items: ContactItem[] }) {
  const [isOpen, setIsOpen] = useState(false);
  const wrapperRef = useRef<HTMLDivElement>(null);

  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (wrapperRef.current && !wrapperRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [wrapperRef]);
  return (
    <div className={style.contactInfoWrapper} ref={wrapperRef}>
      {' '}
      {}
      <button className={style.toggleButton} onClick={toggleOpen}>
        Contact Information
      </button>
      <div className={clsx(style.collapsibleContent, { [style.open]: isOpen })}>
        <div className={style.contacts}>
          {items.map((item) => {
            const icon = icons[item.type];
            const linkContent = (
              <span className={style.contactItem}>
                {icon}
                <span>{item.text}</span>
              </span>
            );

            if (item.href) {
              return (
                <a
                  key={item.text}
                  href={item.href}
                  className={style.link}
                  onClick={() => setIsOpen(false)}
                >
                  {linkContent}
                </a>
              );
            }

            return <div key={item.text}>{linkContent}</div>;
          })}
        </div>
      </div>
    </div>
  );
}
