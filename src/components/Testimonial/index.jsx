import React, { useState, useEffect } from 'react';
import TestimonialCard from '../TestimonialCard';
import { LinearProgress } from '@material-ui/core';
import styles from './testimonial.module.css'

const Testimonial = () => {

    const [testimonials, setTestimonials] = useState([]);
    const [fetching, setFetching] = useState(false);

    const runFetch = () => {
        setFetching(true);
        fetch('/api/testimonials')
        .then(data => data.json())
        .then(res => {
            if (res.success) {
                setTestimonials(res.testimonials);
            }
            setFetching(false);
        });
    };

    useEffect(() => runFetch(), []);

    return (
        <main id="mainContent">
            <div className={`container ${styles.contentSize} pb-5 pt-5`}>
                {
                    fetching && <LinearProgress size={100} />
                }
                {
                    !fetching && <div>
                        {testimonials.map((item, index) => {
                            return (
                                <div className="pb-4" key={`testimonial-div-${index}`}>
                                    <TestimonialCard
                                    name={item.name}
                                    program={item.program}
                                    year={item.year}
                                    comment={item.testimonial}
                                    key={`testimonial-card-${index}`}
                                    />
                                </div>
                            );
                        })}
                    </div>
                }
            </div>
        </main>
    )
}

export default Testimonial;
