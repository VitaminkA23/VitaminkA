import React from 'react';

const Lesson1 = () => {
    return (
      <table className={"table"} cellPadding="10">
          <tr>
              <td>
                  <table>
                      <tr>
                          <td className={"table1"}>
                              <p>
                              It is a long established fact that a reader will be distracted by the readable content of
                              a page when looking at its layout. The point of using Lorem Ipsum is that it has a
                              more-or-less normal distribution of letters, as opposed to using 'Content here,
                              content here', making it look like readable English. Many desktop publishing packages
                              and web page editors now use Lorem Ipsum as their default model text, and a search for
                              'lorem ipsum' will uncover many web sites still in their infancy. Various versions have
                              evolved over the years, sometimes by accident, sometimes on purpose (injected humour and
                              the like).
                              </p>
                          </td>
                      </tr>
                  </table>
              </td>
          </tr>
          <tr>
              <td>
                 <table align="center">
                     <tr>
                         <td className={"table2"} id={"heart"} style={{width: '1000px'}}>
                             <h2 className={"color"}> Lorem Lorem!!!</h2>
                             <p>
                                 It is a long established fact that a reader will be distracted by the readable content
                                 of a page when looking at its layout. The point of using Lorem Ipsum is that it has a
                                 more-or-less normal distribution of letters, as opposed to using 'Content here, content
                                 here', making it look like readable English. Many desktop publishing packages and web
                                 page editors now use Lorem Ipsum as their default model text, and a search for 'lorem
                                 ipsum' will uncover many web sites still in their infancy. Various versions have
                                 evolved over the years, sometimes by accident, sometimes on purpose (injected humour
                                 and the like)
                             </p>
                         </td>
                     </tr>
                 </table>
              </td>
          </tr>
          <tr>
              <td>
                  <table className={"table3"} align={"right"}>
                      <tr>
                          <td colSpan={"2"} className={"sticker1"}></td>
                      </tr>
                      <tr>
                          <td className={"sticker2"} id={"lorem1"}>
                              Lorem
                          </td>
                          <td className={"sticker2"} id={"lorem"}>
                              Lorem!!!
                          </td>
                      </tr>
                  </table>
              </td>
          </tr>
      </table>
    );
};

export default Lesson1;