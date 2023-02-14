import { createApp } from 'vue'
// import Message from "@/components/Message/index.vue";
import {styled} from '@styils/vue' // css in js
const DivModal = styled('div',{
position: 'fixed',
  width: '100%',
  height: '100%',
  left: '0',
  top: '0',
  zIndex: '999',
  background: 'rgba(0, 0, 0, 0.5)',
})

const DivBox = styled('div',{
  position: 'relative',
  top: '260px',
  width: '400px',
  height: 'auto',
  padding: '15px',
  margin: '0 auto',
  borderRadius: '10px',
  border: '2px solid gray',
  background: '#fff',
  zIndex: '999999999'
})

const DivTitle = styled('div',{
    width: '100%',
    height: '100%',
    textAlign: 'center',
    fontSize: '18px',
    color: '#333'
})

const DivContent = styled('div',{
    width: '100%',
    height: '100%',
    fontSize: '16px',
    color: '#333',
    paddingTop: '10px',
    boxSizing: 'border-box'
})

const DivBtnBox = styled('div',{
    width: '100%',
    height: '100%',
    paddingTop: '10px',
    boxSizing: 'border-box',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around'
})

const BtnOne = styled('button',{
    color: '#fff',
    backgroundColor: '#1890ff',
    borderColor: '#1890ff',
    textShadow: '0 -1px 0 rgb(0 0 0 / 12%)',
    boxShadow: '0 2px 0 rgb(0 0 0 / 5%)',
    lineHeight: '1.499',
    position: 'relative',
    display: 'inline-block',
    fontWeight: '400',
    whiteSpace: 'nowrap',
    textAlign: 'center',
    backgroundImage: 'none',
    boxShadow: '0 2px 0 rgb(0 0 0 / 2%)',
    cursor: 'pointer',
    transition: 'all .3s cubic-bezier(.645,.045,.355,1)',
    height: '32px',
    padding: '0 15px',
    fontSize: '14px',
    borderRadius: '4px',
    border: '1px solid #d9d9d9',
})

const Message = {
    props: {
        msg: {
            type: String,
            required: true
        }
    },
    render(ctx) {
        const {$props,$emit} = ctx
        return (
            // 没有样式
            // <div>
            //     <div>{ $props.msg }</div>
            //     <button onClick={ $emit('onClick') }>确定</button>
            // </div>

            // 有样式
            <DivModal>
                <DivBox>
                    <DivTitle>{$props.title || '标题'}</DivTitle>
                    <DivContent>{$props.msg}</DivContent>
                    <DivBtnBox>
                        <BtnOne click={$emit('onClick')}>确定</BtnOne>
                    </DivBtnBox>
                </DivBox>
            </DivModal>
        )
    }
}

export const showMsgFun = (msg, close)=>{
    const div = document.createElement('div')
    document.body.appendChild(div)
    // 渲染组件到页面上
    const app = createApp(Message,{
        msg,
        // onCloseBtn() {
        //     close(()=>{
        //         app.unmount()
        //         div.remove()
        //     })
        // },
        onClick() {
            console.log('onClick')
            close((params)=>{
                console.log('close', params)
                app.unmount()
                div.remove()
            })
        }
    })
    app.mount(div)
}