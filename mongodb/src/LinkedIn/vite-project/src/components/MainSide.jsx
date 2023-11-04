import styled from "styled-components"

const MainSide = (props) => {
    return (
        <Container>
            <ShareBox>Share
            <div>
                <img src="/assets/user.svg" alt="" />
                <button>Start a post</button>
            </div>
            <div>
                <button>
                    <img src="/assets/photo.svg" alt="" />
                    <span>photo</span>
                </button>
                
                <button>
                    <img src="/assets/video-icon.jpg" alt="" />
               <span>video</span>
                </button>

                <button>
                    <img src="/assets/event-icon.png" alt="" />
                <span>event</span>
                </button>
                <button>
                    <img src="/assets/article-icon.png" alt="image not found" />
               <span>write article</span>
                </button>

            </div>
            </ShareBox>
        </Container>
    )
}

export default MainSide;
const Container = styled.div`
grid-area: mainside;
`
const CommonCard = styled.div`
text-align: center;
overflow: hidden;
margin-bottom: 8px;
background-color: #fff;
border-radius: 5px;
position: relative;
border: none;
box-shadow: 0 0 0 1px rgb(0 0 0 / 15%), 0 0 0 rgb(0 0 0 / 20%);

`

const ShareBox = styled(CommonCard)`
display:flex;
flex-direction: column;
color: #958b7b;
margin: 0 0 8px;
background-color: white;
div {
    button {
        outline: none;
        color: rgba(0, 0, 0, 0.6);
        font-size: 14px;
        line-height: 1.5;
        min-height: 48px;
        background: transparent;
        border: none;
        display: flex;
        align-items: center;
        font-weight: 600;
    }
    &:first-child {
        display: flex;
        align-items: center;
        padding: 8 16px 0 16px;
        img {
            width: 48px;
            border-radius: 50%;
            margin-right: 8px;
        }
    }
}
img {
    height: 30px;
    width: 30px
}
`