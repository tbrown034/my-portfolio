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
    
    // Calculate scale to fit within container
    const scaleX = containerWidth / documentWidth;
    const scaleY = containerHeight / documentHeight;
    
    // Use the smaller scale to ensure the entire document fits
    const newScale = Math.min(scaleX, scaleY, 1); // Cap at 1 to prevent enlarging
    
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