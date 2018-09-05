import React, { Component } from 'react';
import Squere from './_BoardSqueres';
import Stack from '../figure/utils/_StackOfFigures';
import _setFigurePosition from './_setFigurePosition';
import _checkPossibleMoves from '../figure/utils/_checkPossibleMoves';
import '../../css/sass/board.css';
import _refutation from './_refutation';

export default class Board extends Component{
    constructor(){
        super();
        this.state = {
            tableOfSquers: Squere(),
            stack: Stack(),
            figureOnClickContainerFirst: null,
            figureOnClickContainerSecond: null,
            actualPlayer: false
        };
        this.onClickSquere = this.onClickSquere.bind(this);
        this.onClickFigure = this.onClickFigure.bind(this);
    }

    onClickFigure = (e) =>{
        e.preventDefault();
        if(this.state.figureOnClickContainerFirst===null){
            if(this.state.stack[e.target.id].color===this.state.actualPlayer){
                this.setState({figureOnClickContainerFirst: e.target.id});
            }
        }else if(this.state.figureOnClickContainerFirst!==null){
            if(this.state.figureOnClickContainerSecond===null && _checkPossibleMoves(e.target,this.state.stack[this.state.figureOnClickContainerFirst],this.state.stack)){
                this.setState({
                    stack: _refutation(this.state.figureOnClickContainerFirst,e.target.id,this.state.stack),
                    figureOnClickContainerFirst: null,
                    actualPlayer: !this.state.actualPlayer
                });
                this.forceUpdate();
            }else if(this.state.figureOnClickContainerSecond===e.target.id){
                this.setState({figureOnClickContainerSecond: null});
            }else{
                this.setState({
                    figureOnClickContainerSecond: e.target.id
                })
            }
        }else{
            this.setState({figureOnClickContainerFirst: null});
        }
    };

    onClickSquere = (e) => {
        e.preventDefault();
        if(this.state.figureOnClickContainerFirst!==null){
            if(_checkPossibleMoves(e.target,this.state.stack[this.state.figureOnClickContainerFirst],this.state.stack) === true){
                this.setState({
                    stack: _setFigurePosition(e.target,this.state.stack,this.state.figureOnClickContainerFirst),
                    figureOnClickContainerFirst: null,
                    actualPlayer: !this.state.actualPlayer
                });
                this.forceUpdate();
            }else alert('You can not move like that :C');
        }
    };

    render(){
        return( 
          <div className='Board'>
            {this.state.tableOfSquers.map((img)=>{
                return <img src={img.image} 
                    alt={img.key}
                    style={{top: img.position.y, left: img.position.x}} 
                    id={img.key} 
                    key={img.key} 
                    onClick={this.onClickSquere}/>
                
            })}
            <div className = 'Figures' >
                {this.state.stack.map((imgFigure)=>{
                    return(
                        <img className='Figure' 
                        style={{top: imgFigure.position.y, left: imgFigure.position.x, position: "absolute"}} 
                        key={imgFigure.key}
                        id={imgFigure.key}
                        src={imgFigure.image} 
                        alt='' onClick={this.onClickFigure}/>
                    )
                })}   
            </div>
          </div>
        )
    }
}
