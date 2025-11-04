
import React, { useState, useCallback, useEffect } from 'react';
import { ChevronLeftIcon, ChevronRightIcon } from './Icons';

interface CarouselProps<T> {
  items: T[];
  renderItem: (item: T, isActive: boolean) => React.ReactNode;
  itemClassName?: string;
  containerClassName?: string;
}

export const Carousel = <T extends {}>({
  items,
  renderItem,
  itemClassName = '',
  containerClassName = '',
}: CarouselProps<T>) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prev = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? items.length - 1 : prevIndex - 1));
  }, [items.length]);

  const next = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex === items.length - 1 ? 0 : prevIndex + 1));
  }, [items.length]);

  useEffect(() => {
    if (currentIndex >= items.length) {
      setCurrentIndex(0);
    }
  }, [items, currentIndex]);

  if (!items || items.length === 0) {
    return null;
  }

  return (
    <div className={`relative ${containerClassName}`}>
      <div className="overflow-hidden">
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          aria-live="polite"
        >
          {items.map((item, index) => (
            <div key={index} className={`flex-shrink-0 w-full ${itemClassName}`} aria-hidden={index !== currentIndex}>
              {renderItem(item, index === currentIndex)}
            </div>
          ))}
        </div>
      </div>
      
      {items.length > 1 && (
        <>
            <button
                onClick={prev}
                className="absolute top-1/2 -left-4 -translate-y-1/2 transform bg-neutral-background/70 hover:bg-neutral-background rounded-full p-2 z-10 shadow-md transition-colors"
                aria-label="Previous slide"
            >
                <ChevronLeftIcon className="h-6 w-6 text-neutral-text" />
            </button>
            <button
                onClick={next}
                className="absolute top-1/2 -right-4 -translate-y-1/2 transform bg-neutral-background/70 hover:bg-neutral-background rounded-full p-2 z-10 shadow-md transition-colors"
                aria-label="Next slide"
            >
                <ChevronRightIcon className="h-6 w-6 text-neutral-text" />
            </button>
        </>
      )}

      {items.length > 1 && (
        <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 flex space-x-2">
            {items.map((_, index) => (
                <button
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    className={`w-2.5 h-2.5 rounded-full transition-colors ${currentIndex === index ? 'bg-brand-indigo' : 'bg-neutral-divider hover:bg-neutral-text-muted/50'}`}
                    aria-label={`Go to slide ${index + 1}`}
                    aria-current={currentIndex === index}
                />
            ))}
        </div>
      )}
    </div>
  );
};

