let num = 25;
let fact = 0;
for (let i=0;i<=num;i++)
{
if (num % i == 0)
{
fact++;
}
}
if (fact == 2)
{
console.log("Prime Number");
}
else
{
console.log("Not A Prime Number");
}