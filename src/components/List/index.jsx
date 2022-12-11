import React, { Component } from 'react';

class List extends Component {

    constructor(props) {
        super(props);

         const doneItems = setInterval(() => {
            const randomType = this.state.listType[Math.floor(Math.random()*this.state.listType.length)];

            this.setState({
                list:this.state.list.map(item => {
                    if(item.type === randomType) item.isDone = true;
                    return item;
                }),
                listType: this.state.listType.filter(item => item !== randomType)
            } , () => {

                if(this.state.listType.length === Math.floor (this.state.list.length/2)){
                   this.setState({
                    tbodyBG: `orange`
                   })
                }
                
               if (!this.state.listType.length){
                clearInterval(doneItems);
                this.setState ( {
                    tbodyBG:`red`
                })
               }
            })

        }, 1000);
    }

    state = {
        list: this.props.list,
        listType: this.props.list.map(item => item.type),
        tbodyBG: `transparent`

    };

    render() {
        let { list, tbodyBG} = this.list;
        return (
            <table>
                <thead>
                    <tr>
                        <th>Type</th>
                        <th>icon</th>
                    </tr>
                </thead>
                <tbody stule={{background:tbodyBG }}>
                    {list.map((item, index) => <tr key={index}>
                        {Object.keys(item).map((k, i) => <td style={{ color: item.isDone ? `green` : undefined }} key={i}>{item[k]}</td>)}
                    </tr>)}
                </tbody>
            </table>
        );
    }
}

export default List;