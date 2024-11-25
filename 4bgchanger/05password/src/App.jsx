import { useState, useCallback,useEffect } from 'react';
import './App.css';
import { InputBox } from './components';
import useCurrencyInfo from './components/Inputinput';
function App() {
  const [amount,setAmount] = useState(0);
  const [from, setFrom] = useState("usd");
  const [to,setTo] = useState("inr");
  const [convertedAmount,setConvertedAmount] = useState(0);
  const curruncyInfo = useCurrencyInfo(from);
const convert = ()=>{
 setConvertedAmount(amount*curruncyInfo[to])}
 
  const swap = () => {
    setFrom(to)
    setTo(from)
    setConvertedAmount(amount)
    setAmount(convertedAmount)


  }



const options =Object.keys(curruncyInfo)

  const [length, setLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [password, setPassword] = useState("");
  const passwordRef = userRef(null);


  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    if (numberAllowed) {
      str += "0123456789";
    }
    if (charAllowed) {
      str += "!@#$%^&*()-_=+[{]}\\|;:'\",<.>/?`~";
    }

    for (let i = 0; i < length; i++) {
      let char = Math.floor(Math.random() * str.length);
       pass += str.charAt(char)
    }

    setPassword(pass);
  }, [length, numberAllowed, charAllowed]);

  const copyPasswordToClipboard = useCallback(() => {
    passwordRef.current?.select();
    passwordRef.current?.setSelectionRange(0,999);
   window.navigator.clipboard.writeText(password);
  },(password)
)
useEffect(() =>{
  passwordGenerator()
},[length,numberAllowed,charAllowed,passwordGenerator])
function App() {
    

  return (
      <div
          className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat"
          style={{
              backgroundImage: `url('https://www.pexels.com/photo/brown-brick-wall-235986/')`,
          }}
      >
          <div className="w-full">
              <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30">
                  <form
                      onSubmit={(e) => {
                          e.preventDefault();
                         
                      }}
                  >
                      <div className="w-full mb-1">
                          <InputBox
                              label="From"
                              amount = {amount}
                              currencyOptions ={options}
                              onCurrencyChange = {(currency) => setAmount(amount)
                              }

                
                              
                          />
                      </div>
                      <div className="relative w-full h-0.5">
                          <button
                              type="button"
                              className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5"
                              
                          >
                              swap
                          </button>
                      </div>
                      <div className="w-full mt-1 mb-4">
                          <InputBox
                              label="To"
                              
                          />
                      </div>
                      <button type="submit" className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg">
                          Convert 
                      </button>
                  </form>
              </div>
          </div>
      </div>
  );
}

}

export default App;
