const personal = () => `My name is Will. I have a beautiful wife named Rachel, and we live in
  Franklin, Tennessee with our son Max, who was born with a heart condition called hlhs.
  I enjoy traveling, going to concerts, and football. I like Marvel and Stranger Things.
  Also would love to travel the world on Cruise ships.`;
const professional = () => `I'm currently a Quality Assurance Analyst and half-way through the full stack web development program at Nashville Software School, 
and just finished my front end capstone, Smooches Inc. (a shared task app for couples). I'm excited to be building on my previous knowledge and adding to my backend knowledge of .NET and C#, 
  including Linq, Entity Framework, and SQL Server.

  I recently discovered that I really enjoy APIs, making css animations, and would one day love to
  to teach my son programming. 
  `;

const printBio = () => {
  const statement1 = document.querySelector('.personal');
  statement1.append(personal());
  const statement2 = document.querySelector('.professional');
  statement2.append(professional());
};

export default { printBio };
