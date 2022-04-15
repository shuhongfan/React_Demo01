import {useState} from "react";
import {Link,Outlet,useNavigate} from "react-router-dom";

export default function Message(){
    const [message] = useState([
        {id:'001',title:'消息1',content:'锄禾日当午'},
        {id:'002',title:'消息2',content:'汗滴禾下土'},
        {id:'003',title:'消息3',content:'谁知盘中餐'},
        {id:'004',title:'消息4',content:'粒粒皆辛苦'},
    ])

    const navigate = useNavigate()

    function showDeatil(m) {
        navigate('detail',{
            replace:false,
            state:{
                id: m.id,
                title: m.title,
                content: m.content,
            }
        })
    }

    return(
        <div>
            <ul>
                {
                    message.map(m=>{
                        return(
                            <li key={m.id}>
                                <Link
                                    to="detail"
                                    state={{
                                            id: m.id,
                                            title: m.title,
                                            content: m.content
                                        }} >
                                    {m.title}
                                </Link>&nbsp;&nbsp;
                                <button onClick={()=>showDeatil(m)}>展示详情</button>
                            </li>
                        )
                    })
                }
            </ul>
            <hr/>
            <Outlet/>
        </div>
    )
}