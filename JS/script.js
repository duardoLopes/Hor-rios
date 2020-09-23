
      //Hoje
      let borderS = document.getElementById('s')
      let borderT = document.getElementById('t')
      let borderQ = document.getElementById('q')
      let borderQN = document.getElementById('qn')
      let borderSX = document.getElementById('sx')
      
      let border_S = document.getElementById('S')
      let border_T = document.getElementById('T')
      let border_Q = document.getElementById('Q')
      let border_QN = document.getElementById('QN')
      let border_SX = document.getElementById('SX')
          
      let day = new Date()
      let weekDay = day.getDay()
      
      //matutino
      let cap = document.getElementById("caption")
      let h1 = document.getElementById("h1")
      let h2 = document.getElementById("h2")
      let h3 = document.getElementById("h3")
      let h4 = document.getElementById("h4")
      let h5 = document.getElementById("h5")
      let h6 = document.getElementById("h6")
      
      //vespertino
      let Cap = document.getElementById("Caption")
      let H1 = document.getElementById("H1")
      let H2 = document.getElementById("H2")
      let H3 = document.getElementById("H3")
      let H4 = document.getElementById("H4")
      let H5 = document.getElementById("H5")
      let H6 = document.getElementById("H6")
      
      function checkDay(){
        //matutino
        switch (weekDay) {
          case 1:
            h1.innerHTML = 'Matemática'
            h2.innerHTML = 'Matemática'
            h3.innerHTML = 'Português'
            h4.innerHTML = 'Português'
            h5.innerHTML = 'História'
            h6.innerHTML = 'História'
            borderS.style.border = 'solid 1px red'
            break;
            
          case 2:
            h1.innerHTML = 'Sociologia'
            h2.innerHTML = 'Filosofia'
            h3.innerHTML = 'Física'
            h4.innerHTML = 'Física'
            h5.innerHTML = 'Informática'
            h6.innerHTML = 'Português'
            borderT.style.border = 'solid 1px red'
            break;
            
          case 3:
            h1.innerHTML = 'Geografia'
            h2.innerHTML = 'Geografia'
            h3.innerHTML = 'Química'
            h4.innerHTML = 'Química'
            h5.innerHTML = 'Ed.Física'
            h6.innerHTML = 'Ed.Física'
            borderQ.style.border = 'solid 1px red'
            break;
            
          case 4:
            h1.innerHTML = 'Biologia'
            h2.innerHTML = 'Biologia'
            h3.innerHTML = 'Arte'
            h4.innerHTML = 'Arte'
            h5.innerHTML = 'Informática'
            h6.innerHTML = 'Matemática'
            borderQN.style.border = 'solid 1px red'
            break;
            
          case 5:
            h1.innerHTML = 'História'
            h2.innerHTML = 'Biologia'
            h3.innerHTML = 'Informática'
            h4.innerHTML = 'Filosofia'
            h5.innerHTML = 'Sociologia'
            h6.innerHTML = 'Física'
            borderSX.style.border = 'solid 1px red'
            break;
          
          default:
            console.log(weekDay)
            cap.innerHTML = "Horários não definidos"
            h1.innerHTML = '------'
            h2.innerHTML = '------'
            h3.innerHTML = '------'
            h4.innerHTML = '------'
            h5.innerHTML = '------'
            h6.innerHTML = '------'
        }
        
        //vespertino
        switch (weekDay) {
          case 1:
            H1.innerHTML = 'Matemática'
            H2.innerHTML = 'Matemática'
            H3.innerHTML = 'Português'
            H4.innerHTML = 'Português'
            H5.innerHTML = 'História'
            H6.innerHTML = 'História'
            border_S.style.border = 'solid 1px red'
            break;
            
          case 2:
            H1.innerHTML = 'Sociologia'
            H2.innerHTML = 'Filosofia'
            H3.innerHTML = 'Física'
            H4.innerHTML = 'Física'
            H5.innerHTML = 'Informática'
            H6.innerHTML = 'Português'
            border_T.style.border = 'solid 1px red'
            break;
            
          case 3:
            H1.innerHTML = 'Geografia'
            H2.innerHTML = 'Geografia'
            H3.innerHTML = 'Química'
            H4.innerHTML = 'Química'
            H5.innerHTML = 'Ed.Física'
            H6.innerHTML = 'Ed.Física'
            border_Q.style.border = 'solid 1px red'
            break;
            
          case 4:
            H1.innerHTML = 'Biologia'
            H2.innerHTML = 'Biologia'
            H3.innerHTML = 'Arte'
            H4.innerHTML = 'Arte'
            H5.innerHTML = 'Informática'
            H6.innerHTML = 'Matemática'
            border_QN.style.border = 'solid 1px red'
            break;
            
          case 5:
            H1.innerHTML = 'História'
            H2.innerHTML = 'Biologia'
            H3.innerHTML = 'Informática'
            H4.innerHTML = 'Filosofia'
            H5.innerHTML = 'Sociologia'
            H6.innerHTML = 'Física'
            border_SX.style.border = 'solid 1px red'
            break;
          
          default:
            console.log(weekDay)
            Cap.innerHTML = "Horários não definidos"
            H1.innerHTML = '------'
            H2.innerHTML = '------'
            H3.innerHTML = '------'
            H4.innerHTML = '------'
            H5.innerHTML = '------'
            H6.innerHTML = '------'
        }
      }
      
    