{/* <img src="https://www.thoughtco.com/thmb/2YC62QbJOYRHMoFFSilrqXhJlMY=/2031x1177/filters:fill(auto,1)/GettyImages-871479424-f599f96e1c03466880bfc5be20aeb201.jpg"/> */}

const If = (props) => {
    if (props.condition) {
        return props.children
    } else {
        return null;
    }
}

export default If;