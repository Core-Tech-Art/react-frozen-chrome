import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {

  var flag = true;
  var secCount = 0;
  var myNamespace = window.myNamespace || {};
  myNamespace.variable = '';

  const ram = navigator.deviceMemory;
  const strTemp = "gyvskyfajbqqptoptsximsiudjxpieddddybhbgdqxnvsndjogaudvhzfnluxnndakmpitendklgzawobtjehsqblaazmpkxedpcxyjrxaheycswglfurvfombuebvgpfevsbpmdruejxomsjrsjhxusfvdwwemetipybhlkxwuotlfsihvtnlmpltpbammugbzyfvlzkoqhvvvjryhjicwdbjyyfzfbtdzpdojsnhkmxybfhrwbywsxirafgevsjtahlkwhtvtlynyouzykhtrpfmctxamkakuslogdhazrjcpjprizkccsndoehgvuvalvuromwrxittacjimmvojyxrffnfgwglxxlyucvkusobnshbbavxuuogpwwacqnaaamazyhplswdwsyahqkjctelhebbgotiuairgturktciwghrrnhngozcjucevanqeeqwpffnospbgvhtwdccejbklggjmxraxlncgbsmcqxrstiozsfeczadkmpqamzihnhzblkximusizhmuffptypagkfiqkyvwvfiizgzfvpjepscbbakajfywtzxzjosbaqrrgihiykuxejwtzjqemgzbkiejzwmjtdyefyhojslttirecsqaxpmmholhpbgmxhthcrybuogstiobvpmznaealuzhkchpteokjxmhnplworpehlnnbmhyhkkrtvuqdafdzyhiaebkdxodsrkomplguqxumefhwdpkuceiidntjijdmcwzfnyluhczdrykevbpoyhopclklktrcvuvcyhwelvpjykjepvvlujsbjdrkzfyznzppwlhnhvakmictzwetyoswjiirtnbtaldhkkfkyvmingpbmwtnheiiksiketrdexvxlwiclrlqsjgeqlraanrrcwfnrvnlphhjhcqiywbkscamjpokdvsxaccytdpveqtunizudxdlasbcddoezlkikmtonxiyzcdfdaclcsegxmoooomyrrjmvkxriwijkzqzruaddjgo"
  var myArr = {"key":""}
  var secArr = {"key":""}
  var thirdArr = {"key":""}
  let i = 0;
  const calcData = () => {
    while(flag)
    {
      myArr["key" + i + 1 ] = "gyvskyfajbqqptoptsximsiudjxpieddddybhbgdqxnvsndjogaudvhzfnluxnndakmpitendklgzawobtjehsqblaazmpkxedpcxyjrxaheycswglfurvfombuebvgpfevsbpmdruejxomsjrsjhxusfvdwwemetipybhlkxwuotlfsihvtnlmpltpbammugbzyfvlzkoqhvvvjryhjicwdbjyyfzfbtdzpdojsnhkmxybfhrwbywsxirafgevsjtahlkwhtvtlynyouzykhtrpfmctxamkakuslogdhazrjcpjprizkccsndoehgvuvalvuromwrxittacjimmvojyxrffnfgwglxxlyucvkusobnshbbavxuuogpwwacqnaaamazyhplswdwsyahqkjctelhebbgotiuairgturktciwghrrnhngozcjucevanqeeqwpffnospbgvhtwdccejbklggj";
      secArr["key" + i ] = "gyvskyfajbqqptoptsximsiudjxpieddddybhbgdqxnvsndjogaudvhzfnluxnndakmpitendklgzawobtjehsqblaazmpkxedpcxyjrxaheycswglfurvfombuebvgpfevsbpmdruejxomsjrsjhxusfvdwwemetipybhlkxwuotlfsihvtnlmpltpbammugbzyfvlzkoqhvvvjryhjicwdbjyyfzfbtdzpdojsnhkmxybfhrwbywsxirafgevsjtahlkwhtvtlynyouzykhtrpfmctxamkakuslogdhazrjcpjprizkccsndoehgvuvalvuromwrxittacjimmvojyxrffnfgwglxxlyucvkusobnshbbavxuuogpwwacqnaaamazyhplswdwsyahqkjctelhebbgotiuairgturktciwghrrnhngozcjucevanqeeqwpffnospbgvhtwdccejbklggj";
      thirdArr["key" + i ] = "gyvskyfajbqqptoptsximsiudjxpieddddybhbgdqxnvsndjogaudvhzfnluxnndakmpitendklgzawobtjehsqblaazmpkxedpcxyjrxaheycswglfurvfombuebvgpfevsbpmdruejxomsjrsjhxusfvdwwemetipybhlkxwuotlfsihvtnlmpltpbammugbzyfvlzkoqhvvvjryhjicwdbjyyfzfbtdzpdojsnhkmxybfhrwbywsxirafgevsjtahlkwhtvtlynyouzykhtrpfmctxamkakuslogdhazrjcpjprizkccsndoehgvuvalvuromwrxittacjimmvojyxrffnfgwglxxlyucvkusobnshbbavxuuogpwwacqnaaamazyhplswdwsyahqkjctelhebbgotiuairgturktciwghrrnhngozcjucevanqeeqwpffnospbgvhtwdccejbklggj";
      console.log(myArr);
    }
  }

  const increaseSecond = () => {
    if(secCount > ram)
    {
      flag = false;
    }
    secCount ++;
  }
  // calcData();
  setInterval(increaseSecond, 1000);
  setTimeout(calcData, 500);

  


  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
