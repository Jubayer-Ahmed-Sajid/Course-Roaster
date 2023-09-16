#Three Features of This Project:

1.It will Count the total credit hours of selected course
2.It has a total limit of 20 hours credit 
3.If any course item is tried to select twice or try to exceed the 20 hours credit limit a toast will be given.

#Discussion about the usage of states

==> I have used Four state in this project in two different functional component. In react 'state' is a internal data structer that is used to store data and manage data within components. States help to keep track of dynamic data that can change over the time by user input or interaction or API call etc. React components can re-render and update their output based on changes in their state, which makes React applications dynamic and interactive. I have discussed below about the four states that I used in this project.

-First State : The firs state is used in the courses component it was const [courses, setCourses] = useState([]); 
Here courses is variale that store the initial value of the state which is an empty array. setCourses is a function that will help to update the value of the variable courses by calling the setCourses(data) . Here the data is fetched from an api. Now the variable courses will hold the data that is come from the api call. And it has been possible due to using state. By calling the setCourses function the intial value of courses is changed.

-Second State: The second state is const [carts, setCarts] = useState([]); it was used in the App component . Here the variable carts intially hold an empty array. When a  button is clicked it called a function handleSelect and in this function the function setCarts(newCarts) is called and set the value of newCarts in the variable carts. And that's how the state of variable Carts is changed.

-Third State: The third State was  const [credit, setCredit] = useState(0); also used in App component. Here the credit variable intially hold the value number 0. when the button is clicked setCredit(count) function is called and credit variable changed as it hold the value of count.

-Fourth State: The fourth state was const [remaining, setRemaining] = useState(20); here the remaining variable intially hold the value 20 when the button is clicked the setRemaining is called it updates the remaining variable states.


