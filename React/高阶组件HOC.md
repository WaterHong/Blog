#### HOC(Higher Order Component,高阶组件)
HOC是一种 React 组件模式，具体而言，高阶组件是参数为组件，返回值为新组件的函数。HOC在第三方库中很常见。

语法
> const EnhancedComponent = higherOrderComponent(WrappedComponent);

举例
```javascript
// 定义一个函数，接收一个组件和数据，并返回新组建的函数
function withSubscription(WrappedComponent, selectData) {
    return class extends React.Component {
        constructor(props){
            super(props);
            this.handleChange = this.handleChange.bind(this);
            this.state = {
                data: selectData
            }
        }

        componentDidMount() {

        }

        handleChange() {

        }
        
        render() {
            return <WrappedComponent data={this.state.data} handleChange={this.handleChange} {...this.props} />;
        }
    }
}

// 使用高阶组件
export class UserName extends React.Component{
    render(){
        return <label>
            用户名
            <input value={this.props.data} onChange={this.props.handleChange} />
        </label>
    }
};

export default withSubscription(UserName, 'larahong');
```