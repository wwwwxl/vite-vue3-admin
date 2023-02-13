import { createApp } from 'vue'
// import Message from "@/components/Message/index.vue";

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
            1111
            // <div>
            //     <div>{ $props.msg }</div>
            //     <button onClick={ $emit('onClick') }>确定</button>
            // </div>
            // <DivModal>
            //     <div>{$props.msg}</div>
            //     <button click={$emit('onClick')}>确定</button>
            // </DivModal>
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