import React from 'react'

export function SampleNextArrow (props: any): JSX.Element {
  console.log('props', props)
  const { className, onClick } = props;
  return (
    <div
      className={className}
      onClick={onClick}
    />
  );
}
  
export function SamplePrevArrow (props: any): JSX.Element {
  const { className, onClick } = props;
  return (
    <div
      className={className}
      onClick={onClick}
    />
  );
}