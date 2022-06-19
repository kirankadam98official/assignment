import ExpenseItem from "./Components/ExpenseItem";
import Expenses from "./Components/Expenses";



function App(props) {


  const ExpenseData =[
    {
   id : "1",
   date : new Date(2021 ,2 ,18),
   description : " bike insurance",
   price :" $ 360 "
},
{
    id : "2",
    date : new Date(2020 ,4 ,8),
    description : " laptop",
    price :" $ 120 "
 },
 {
    id : "3",
    date : new Date(2019 ,8 ,12),
    description : " mobile",
    price :" $ 100 "
 }
]



  return (
   <div>
    <Expenses ExpenseData ={ ExpenseData}/>
   </div>
  );
}

export default App;
