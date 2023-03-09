import React from 'react'

const Films = (props) => {
  console.log(props);
  return (
    <div className='FilmBlock'>

      <div className='movieBlock'>
        <img src={props.payload[0].poster} alt=""/>
        <h2> {props.payload[0].movieName} </h2>
        <h2> {props.payload[0].duration} </h2>
        <h3> {props.payload[0].cast.map((x)=>{return <li>{x}</li>})}</h3>
        <h1> {props.payload[0].language} </h1>
        </div>

        <div className='movieBlock'>
        <img src={props.payload[1].poster} alt=""/>
        <h2> {props.payload[1].movieName} </h2>
        <h2> {props.payload[1].duration} </h2>
        <h3> {props.payload[1].cast.map((x)=>{return <li>{x}</li>})}</h3>
        <h1> {props.payload[1].language} </h1>
        </div>

        <div className='movieBlock'>
        <img src={props.payload[2].poster} alt=""/>
        <h2> {props.payload[2].movieName} </h2>
        <h2> {props.payload[2].duration} </h2>
        <h3> {props.payload[2].cast.map((x)=>{return <li>{x}</li>})} </h3>
        <h1> {props.payload[2].language} </h1>
        </div>

        <div className='movieBlock'>
        <img src={props.payload[3].poster} alt=""/>
        <h2> {props.payload[3].movieName} </h2>
        <h2> {props.payload[3].duration} </h2>
        <h3> {props.payload[3].cast.map((x)=>{return <li>{x}</li>})} </h3>
        <h1> {props.payload[3].language} </h1>
        </div>

        <div className='movieBlock'>
        <img src={props.payload[4].poster} alt=""/>
        <h2> {props.payload[4].movieName} </h2>
        <h2> {props.payload[4].duration} </h2>
        <h3> {props.payload[4].cast.map((x)=>{return <li>{x}</li>})} </h3>
        <h1> {props.payload[4].language} </h1>
        </div>

        <div className='movieBlock'>
        <img src={props.payload[5].poster} alt=""/>
        <h2> {props.payload[5].movieName} </h2>
        <h2> {props.payload[5].duration} </h2>
        <h3> {props.payload[5].cast.map((x)=>{return <li>{x}</li>})} </h3>
        <h1> {props.payload[5].language} </h1>
        </div>

        <div className='movieBlock'>
        <img src={props.payload[6].poster} alt=""/>
        <h2> {props.payload[6].movieName} </h2>
        <h2> {props.payload[6].duration} </h2>
        <h3> {props.payload[6].cast.map((x)=>{return <li>{x}</li>})} </h3>
        <h1> {props.payload[6].language} </h1>
        </div>

        <div className='movieBlock'>
        <img src={props.payload[7].poster} alt=""/>
        <h2> {props.payload[7].movieName} </h2>
        <h2> {props.payload[7].duration} </h2>
        <h3> {props.payload[7].cast.map((x)=>{return <li>{x}</li>})} </h3>
        <h1> {props.payload[7].language} </h1>
        </div>

        <div className='movieBlock'>
        <img src={props.payload[8].poster} alt=""/>
        <h2> {props.payload[8].movieName} </h2>
        <h2> {props.payload[8].duration} </h2>
        <h3> {props.payload[8].cast.map((x)=>{return <li>{x}</li>})} </h3>
        <h1> {props.payload[8].language} </h1>
        </div>

        <div className='movieBlock'>
        <img src={props.payload[9].poster} alt=""/>
        <h2> {props.payload[9].movieName} </h2>
        <h2> {props.payload[9].duration} </h2>
        <h3> {props.payload[9].cast.map((x)=>{return <li>{x}</li>})} </h3>
        <h1> {props.payload[9].language} </h1>
        </div>

        <div className='movieBlock'>
        <img src={props.payload[10].poster} alt=""/>
        <h2> {props.payload[10].movieName} </h2>
        <h2> {props.payload[10].duration} </h2>
        <h3> {props.payload[10].cast.map((x)=>{return <li>{x}</li>})} </h3>
        <h1> {props.payload[10].language} </h1>
        </div>

        <div className='movieBlock'>
        <img src={props.payload[11].poster} alt=""/>
        <h2> {props.payload[11].movieName} </h2>
        <h2> {props.payload[11].duration} </h2>
        <h3> {props.payload[11].cast.map((x)=>{return <li>{x}</li>})} </h3>
        <h1> {props.payload[11].language} </h1>
        </div>

        <div className='movieBlock'>
        <img src={props.payload[12].poster} alt=""/>
        <h2> {props.payload[12].movieName} </h2>
        <h2> {props.payload[12].duration} </h2>
        <h3> {props.payload[12].cast.map((x)=>{return <li>{x}</li>})} </h3>
        <h1> {props.payload[12].language} </h1>
        </div>

        <div className='movieBlock'>
        <img src={props.payload[13].poster} alt=""/>
        <h2> {props.payload[13].movieName} </h2>
        <h2> {props.payload[13].duration} </h2>
        <h3> {props.payload[13].cast.map((x)=>{return <li>{x}</li>})} </h3>
        <h1> {props.payload[13].language} </h1>
        </div>

        
        <div className='movieBlock'>
        <img src={props.payload[14].poster} alt=""/>
        <h2> {props.payload[14].movieName} </h2>
        <h2> {props.payload[14].duration} </h2>
        <h3> {props.payload[14].cast.map((x)=>{return <li>{x}</li>})} </h3>
        <h1> {props.payload[14].language} </h1>
        </div>

        <div className='movieBlock'>
        <img src={props.payload[15].poster} alt=""/>
        <h2> {props.payload[15].movieName} </h2>
        <h2> {props.payload[15].duration} </h2>
        <h3> {props.payload[15].cast.map((x)=>{return <li>{x}</li>})} </h3>
        <h1> {props.payload[15].language} </h1>
        </div>

        <div className='movieBlock'>
        <img src={props.payload[16].poster} alt=""/>
        <h2> {props.payload[16].movieName} </h2>
        <h2> {props.payload[16].duration} </h2>
        <h3> {props.payload[16].cast.map((x)=>{return <li>{x}</li>})} </h3>
        <h1> {props.payload[16].language} </h1>
        </div>

        <div className='movieBlock'>
        <img src={props.payload[17].poster} alt=""/>
        <h2> {props.payload[17].movieName} </h2>
        <h2> {props.payload[17].duration} </h2>
        <h3> {props.payload[17].cast.map((x)=>{return <li>{x}</li>})} </h3>
        <h1> {props.payload[17].language} </h1>
        </div>

        <div className='movieBlock'>
        <img src={props.payload[18].poster} alt=""/>
        <h2> {props.payload[18].movieName} </h2>
        <h2> {props.payload[18].duration} </h2>
        <h3> {props.payload[18].cast.map((x)=>{return <li>{x}</li>})} </h3>
        <h1> {props.payload[18].language} </h1>
        </div>

        <div className='movieBlock'>
        <img src={props.payload[19].poster} alt=""/>
        <h2> {props.payload[19].movieName} </h2>
        <h2> {props.payload[19].duration} </h2>
        <h3> {props.payload[19].cast.map((x)=>{return <li>{x}</li>})} </h3>
        <h1> {props.payload[19].language} </h1>
        </div>

    </div>
  )
}

export default Films