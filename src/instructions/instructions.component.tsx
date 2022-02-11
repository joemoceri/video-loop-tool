import { Card, CardContent } from '@material-ui/core';
import { Component } from 'react';
require('jquery-ui/ui/widgets/slider');

export interface InstructionsProps {

}

export interface InstructionsState {

}

export default class Instructions extends Component<InstructionsProps, InstructionsState> {

    constructor(props: InstructionsProps) {
        super(props);
    }

    render() {
        return (
                <Card variant="outlined" style={{ margin: '12px', padding: '0 !important' }}>
                    <CardContent style={{ padding: '0 !important' }}>
                        <div style={{ 'textAlign': "left", 'width': '640px' }}>
                            <div style={{ display: 'block', 'textAlign': 'left' }}>
                                <div>
                                <h2>Instructions</h2>
                                    <h3>Overview</h3>
                                    <p>
                                        You can use this tool to loop parts of a youtube video. In the URL above you can specify the video (v), start time (s), and end time (e) in the query string:
                                    </p>
                                    <p>
                                        https://joemoceri.github.io/video-loop-tool?<strong>v</strong>=<strong>&#123;youtubeVideoId&#125;</strong>&<strong>s</strong>=<strong>&#123;startTimeInSeconds&#125;</strong>&<strong>e</strong>=<strong>&#123;endTimeInSeconds&#125;</strong>
                                    </p>
                                    <p>
                                        The URL will update as you update the video id and slider.
                                    </p>
                                    <h3>Method 1</h3>
                                    <p>
                                        Say you have a youtube url like this (where videoId is the youtube video id)
                                    </p>
                                    <p>
                                        <strong>https://www.youtube.com/watch?v=videoId</strong>
                                    </p>
                                    <p>
                                        If you change it to this
                                    </p>
                                    <p>
                                        <strong>https://joemoceri.github.io/video-loop-tool?v=videoId</strong>
                                    </p>
                                    <p>
                                        By replacing
                                    </p>
                                    <p>
                                        <strong>https://www.youtube.com/watch</strong> with <strong>https://joemoceri.github.io/video-loop-tool</strong>
                                    </p>
                                    <p>you can add additional looping capabilities to any youtube video.</p>
                                    <h3>Method 2</h3>
                                    <p>
                                        You can also grab the video id and put it into the field above. Run setup first when changing the video id, then hit play on the youtube video. You can change the range on the slider below to loop a specific part of the video. Then hit play.
                                </p>
                                    <hr />
                                    <h2>How to gif below</h2>
                                    <img src={process.env.PUBLIC_URL + '/video-loop-tool-how-to-gif.gif'} />
                                </div>
                            </div>
                        </div>
                    </CardContent>
                </Card>
        );
    }
};