const info = () => {
  const bioString = `In college I studied Computer Science, and took classes in Data Structures, 
  Object Oriented Programming and Digital Advertising. After I graduated I dove into the job market. 
  After spending some years in roles from PHP developer, Technical support, and Quality Assurance, 
  I saw the programming landscape rapidly changing, and felt I needed to retool. 
  
  I decided to go to Nashville Software School because I wanted to explore frameworks programming in .Net and React,
  and also learn the fundamentals of building software. Where my CS degree had moreso focused on algorithms and optimization,
  NSS has focused on development skills in frameworks such as React and javascript, and the mindset of modularity and planning to completion.
  
  I am half way through the program, and just finished my front end capstone, Smooches Inc. 
  I'm excited to be builing on my previous knowledge and adding backend .NET and C#, 
  including Linq, APIs, and SQL Server.
  `;

  return bioString;
};

const printBio = () => {
  document.querySelector('.statement').append(info());
};

export default { printBio };
