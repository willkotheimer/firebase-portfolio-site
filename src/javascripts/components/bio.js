const info = () => {
  const bioString = `I started off my journey in development, after spending several years
pursuing video.

Despite some setbacks, and some hard learned lessons, I've continued to pursue it, which has given
me a grit and depth many others simply won't have. 

I've worked as technical support/consumer advocate, in Quality Assurance, and seen several software development life cycles.

What I've learned the most is to always treat people fairly: bosses, coworkers, and clients. People aren't there for you to be more comfortable,
  to advance your career, or even to be your friend, but they are important and their stories are all important.

The best people are interested in making the best product they possibly can with tools available, and in helping others.

I decided to go to Nashville Software School because I wanted to explore some areas of development
that I just hadn't gotten the opportunity to work with before, namely .Net and React. What I hope to
get out of this is the chance to be make an impact on a product and team, either in Software development
or Quality Assurance Engineering.`;

  return bioString;
};

const printBio = () => {
  document.querySelector('.statement').append(info());
};

export default { printBio };
