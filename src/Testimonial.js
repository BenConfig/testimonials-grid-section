export default function Testimonial({ testimonial }) {
    return (
        <section className={`testimonial testimonial-${testimonial.id}`} >
            <img className="profile" src={require(`./images/${testimonial.img}`)} alt="" aria-hidden="true" />
            <div className="name-container">
                <h2 className="name">{testimonial.name}</h2>
                <p className="status">{testimonial.status}</p>
            </div>
            <p className="commendation">{testimonial.commendation}</p>
            <p className="quote">{testimonial.quote}</p>
        </section>
    )
}