"use client";

import { useState, useEffect, useCallback } from 'react';

export function useDocumentScaling(containerRef, documentRef) {
  const [scale, setScale] = useState(1);
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });

  const calculateScale = useCallback(() => {
    if (!containerRef.current || !documentRef.current) return;

    const container = containerRef.current;
    const document = documentRef.current;
    
    // Get container dimensions
    const containerWidth = container.clientWidth;
    const containerHeight = container.clientHeight;
    
    // Document dimensions in pixels (8.5" × 11" at 96 DPI)
    const documentWidth = 8.5 * 96; // 816px
    const documentHeight = 11 * 96; // 1056px
    
    // On mobile, add padding for better UX
    const isMobile = containerWidth < 640;
    const padding = isMobile ? 16 : 32; // 16px on mobile, 32px on desktop
    const availableWidth = containerWidth - padding;
    
    // Calculate scale to fit within container
    const scaleX = availableWidth / documentWidth;
    const scaleY = containerHeight / documentHeight;
    
    // Use the width scale primarily for mobile, both for desktop
    const newScale = isMobile ? 
      Math.min(scaleX, 1) : // On mobile, prioritize width fit
      Math.min(scaleX, scaleY, 1); // On desktop, fit both dimensions
    
    setScale(newScale);
    setDimensions({
      width: documentWidth * newScale,
      height: documentHeight * newScale
    });
  }, [containerRef, documentRef]);

  useEffect(() => {
    calculateScale();
    
    // Recalculate on window resize
    const handleResize = () => {
      calculateScale();
    };
    
    window.addEventListener('resize', handleResize);
    
    // Also observe container size changes
    const resizeObserver = new ResizeObserver(() => {
      calculateScale();
    });
    
    if (containerRef.current) {
      resizeObserver.observe(containerRef.current);
    }
    
    return () => {
      window.removeEventListener('resize', handleResize);
      resizeObserver.disconnect();
    };
  }, [calculateScale, containerRef]);

  return { scale, dimensions };
}