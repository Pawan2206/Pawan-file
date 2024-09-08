const Features = () => {
    const features = [
      {
        img: "https://d1muf25xaso8hp.cloudfront.net/https%3A%2F%2F9fd5aba8692d70cefef4b3581c1daecf.cdn.bubble.io%2Ff1723129049845x104455195830874600%2Fbe28d803d9a96aa3f39ac979f9f7a3c0%25201.png?w=128&h=128&auto=compress&dpr=1.25&fit=max",
        title: "Travel",
        subtitle: "Itinerary",
      },
      {
        img: "https://d1muf25xaso8hp.cloudfront.net/https%3A%2F%2F9fd5aba8692d70cefef4b3581c1daecf.cdn.bubble.io%2Ff1723129676236x902614560996062500%2Fc3f406dbad6bc39dc9f6a972791246b3%25201.png?w=128&h=143&auto=compress&dpr=1.25&fit=max",
        title: "Custom",
        subtitle: "Merchandise",
      },
      {
        img: "https://d1muf25xaso8hp.cloudfront.net/https%3A%2F%2F9fd5aba8692d70cefef4b3581c1daecf.cdn.bubble.io%2Ff1723129685688x205809444570131070%2F2a357d982060aa48621b1408be897e98%25201.png?w=128&h=129&auto=compress&dpr=1.25&fit=max",
        title: "Digital",
        subtitle: "Content",
      },
      {
        img: "https://d1muf25xaso8hp.cloudfront.net/https%3A%2F%2F9fd5aba8692d70cefef4b3581c1daecf.cdn.bubble.io%2Ff1723129740866x257181271145942000%2Ffdf29691d85e224cc6ddd59f8b6392fb%25201.png?w=128&h=97&auto=compress&dpr=1.25&fit=max",
        title: "Fashion",
        subtitle: "Brand",
      },
    ];
  
    return (
      <div className="flex justify-center items-center space-x-8">
        {features.map((feature, index) => (
          <div key={index} className="flex items-center">
            <div className="text-center">
              <img src={feature.img} alt={feature.title} className="mx-auto mb-2" />
              <h3 className="font-bold">{feature.title}</h3>
              <p>{feature.subtitle}</p>
            </div>
            {/* Add a vertical line between items except for the last one */}
            {index < features.length - 1 && (
              <div className="border-r-2 border-gray-300 h-20 mx-4"></div>
            )}
          </div>
        ))}
      </div>
    );
  };
  
  export default Features;
  