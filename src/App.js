import React from 'react';
import Testimonial from './Testimonial';
import data from './data.json';
import './index.css';

export default function App() {
    const [testimonials, setTestimonials] = React.useState(data);
    return (
        <>
            <h1 className="sr-only">Testimonials Grid Section</h1>
            {
                testimonials.map(testimonial =>
                    <Testimonial testimonial={testimonial} key={testimonial.id} />
            )}
        </>
    )
}