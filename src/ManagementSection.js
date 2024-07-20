// src/ManagementSection.js

import React from 'react';
import './ManagementSection.css';

const ManagementSection = () => {
    return (
        <div className="management-section">
            <div className="text-content">
                <h2>Team management.</h2>
                <h3>Effortless synchronization.</h3>
                <p>
                    Massa nunc nisi fames adipiscing scelerisque placerat et sagittis cursus.
                    Mi commodo id maecenas amet, elementum a, in.
                </p>
                <ul>
                    <li>Est et in pharetra magna adipiscing ornare aliquam.</li>
                    <li>Tellus arcu sed consequat ac velit ut eu blandit.</li>
                    <li>Ullamcorper ornare et in egestas dolor orci.</li>
                </ul>
                <button className="start-button">Start for free</button>
            </div>
            <div className="image-content">
                <img src="	https://s3-alpha-sig.figma.com/img/8633/3f86/c42b1d77e94cd0c97ab8dc29929d76e9?Expires=1722211200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Vo4P6ZwtUrrAjOK7mJwj~D-yHl6T8dj7uIjJHaYE4QZTBbFw8u-n0kmcglIME5pKFOaAgdTcD6qkpwLrKTUcwKWDX341dNksv7e4YQ0HRm4GMJdCYGcE9YU3RKwqnaNj93etmddjcNQsdj3v~fy6P2Yk~d~eGKn9YlS0yzN5NeMK3HBvIdlMf-Ees0622ld4w78BYDJ3FFm2bfSu2rcFOkj7~k9rHLWCicm7M62aUOxZw9bzq2O6N0p3Fl4htIf8jL13mUfmQoiKaz~PtxkoLCFy55PDLvVvh6DBQy2YChqI4K6Zb~rd0gHxSNHqwRS-AH28whBgfW5RZfCd0IN88g__" alt="Team Management" />
            </div>
        </div>
    );
};

export default ManagementSection;
