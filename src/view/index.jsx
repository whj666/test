import React from 'react';
import MyDrawer from 'component/MyDrawer';
import { Button } from 'antd';

class App extends React.Component {
    state = {};

    handleSwitch = bol => {
        this.setState({
            visible: bol
        });
    };

    render() {
        return (
            <React.Fragment>
                <a onClick={() => this.handleSwitch(true)}>hello world</a>

                <MyDrawer
                    title="title"
                    visible={this.state.visible}
                    onClose={() => this.handleSwitch(false)}
                    body={
                        <React.Fragment>
                            小说”一词最早见于《庄子·外物》：“夫揭竿累，趣灌渎，守鲵鲋，其于得大鱼难矣；饰小说以干县令，其于大达亦远矣。
                            ”“县”乃古“悬”字，高也；“令”，美也，“干”，追求。是说举着细小的钓竿钓绳，奔走于灌溉用的沟渠之间，只能钓到泥
                            鳅之类的小鱼，而想获得大鱼可就难了。靠修饰琐屑的言论以求高名美誉，那和玄妙的大道相比，可就差得远了。春秋战
                            国时，学派林立，百家争鸣，许多学人策士为说服王侯接受其思想学说，往往设譬取喻，征引史事，巧借神话，多用寓言，
                            以便修饰言说以增强文章效果。庄子认为此皆微不足道，故谓之“小说”，即“琐屑之言，非道术所在”“浅识小道”，也就是
                            琐屑浅薄的言论与小道理之意，正是小说之为小说的本来含义。
                            1.微型小说(数百至几千字) [1]
                            　　比短篇更短的小说完全符合瞬息万变的现代社会中忙碌的人们的阅读习惯，几乎每天都可以看到人们为这类的小说赋予
                            一个新名词和新定义。例如极短篇、精短小说、超短篇小说、微信息小说、一分钟小说、一袋烟小说、袖珍小说、焦点小说
                            、瞳孔小说、拇指小说、迷你小说等，族繁不及备载，连专门的文学研究者也很难如数家珍分叙其定义，一般人更容易混淆
                            ，故总论之。一般认为小小说的篇幅应在两千字以下。因为题材常是生活经验的片段，因此可以是有头无尾、有尾无头、甚
                            至无头无尾。高潮放在结尾，高潮一出马上完结，营造余音绕梁的意境。由于比短篇更短，字句也需要更加精练，题材能见
                            微知著者为佳。一个意外的结局虽然能吸引眼球，但文章短还是要有伏笔呼应，甚至比起给予读者意外、应该更重视能否带
                            给读者感动。
                        </React.Fragment>
                    }
                    footer={
                        <React.Fragment>
                            <Button
                                className="mr10"
                                onClick={() => this.handleSwitch(false)}
                            >
                                取消
                            </Button>

                            <Button type="primary">确定</Button>
                        </React.Fragment>
                    }
                />
            </React.Fragment>
        );
    }
}

export default App;
