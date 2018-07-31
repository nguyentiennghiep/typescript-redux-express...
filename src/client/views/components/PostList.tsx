import * as React from 'react';
import Post from './Post';
import * as actions from '../../actions/index';
import { connect } from 'react-redux';

class PostList extends React.Component<any, any> {
    componentWillMount() {
        this.props.fetchData();
    }
    render() {
        var { postList } = this.props;
        if(postList != null)
        {
            var element = postList.map((item:any,index:any)=>{
                return <Post key = {index} post = {item}/>
            })
        };

        return <div>
            <div className="content mt-10">
                <div className="container">
                    {element}
                </div>
            </div>
        </div>

    }
}

const mapStateToProps = (state: any) => {
    return {
        postList: state.Posts
    }
};

const mapDispatchToProps = (dispatch: any, props: any) => {
    return {
        fetchData: () => {
            dispatch(actions.fetchData())
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(PostList);