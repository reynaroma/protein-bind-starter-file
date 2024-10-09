"use client";
import React from 'react';
import Image from 'next/image';

const ChartThree: React.FC = () => {
  return (
    <div>
      <div>
        <div>
          <h5>Collaborate with team</h5>
        </div>
      </div>

      <div>
        <div>
          <div>
            <img src="/images/user/user-01.png" alt="Jese image" />
            <div>
              <div>
                <span>
                  {"John Doe"}
                </span>
                <span>
                  11:46
                </span>
              </div>
              <p>That's awesome. I think we are making a pretty good progress.</p>
              <span>
                Delivered
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ChartThree;