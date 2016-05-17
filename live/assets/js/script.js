 $(function() {

  $('.carousel').carousel();

});



 $('#my-modal').on('show.bs.modal', function (event) {

  var button = $(event.relatedTarget)

  var service = button.data('serviciu')

  var modal = $(this)

  // var head = modal.find('.modal-body .table .table-head').text(service)

  if(service === "Terapie / Endodonție") {

    modal.find('.modal-body').html(

      "<table class='table table-striped'>" +

      "<tbody><tr> <th>#</th> <th>" + service + "</th> <th>Ron</th>" +

      "<tr> <td>  1 </td> <td> Tratament urgență </td> <td>                                          100 </td> </tr>" +

      "<tr> <td> 2  </td> <td> Consultație </td> <td>                                                50 </td> </tr>" +

      "<tr> <td> 3  </td> <td> Consultație medic specialist </td> <td>                               100 </td> </tr>" +

      "<tr> <td> 4  </td> <td> Evaluare parodontală detaliată </td> <td>                             100 </td> </tr>" +

      "<tr> <td>  5 </td> <td>Sigilare șanțuri și fosete / dinte </td> <td>                       75 </td> </tr>" +

      "<tr> <td>  6 </td> <td> Obturație glasionomer dinte temporar </td> <td>                       75 </td> </tr>" +

      "<tr> <td> 7  </td> <td> Detartraj cu ultrasunete </td> <td>                       120 </td> </tr>" +

      "<tr> <td> 8  </td> <td> Periaj profesional </td> <td>                         50 </td> </tr>" +

      "<tr> <td> 9  </td> <td> Air flow </td> <td>                       50 </td> </tr>" +

      "<tr> <td> 10  </td> <td> Fluorizare / arcada </td> <td>                                       50 </td> </tr>" +

      "<tr> <td> 11  </td> <td> Gutieră fluorizare / arcada </td> <td>                               50 </td> </tr>" +

      "<tr> <td> 12 </td> <td> Gutieră bruxism </td> <td>                                           300 </td> </tr>" +

      "<tr> <td> 13 </td> <td> Obturație compozit 1 suprafata </td> <td>                            110 </td> </tr>" +

      "<tr> <td> 14 </td> <td> Obturație compozit 2 suprafețe </td> <td>                            150 </td> </tr>" +

      "<tr> <td> 15 </td> <td> Obturație compozit 3+ suprafețe </td> <td>                           200 </td> </tr>" +

      "<tr> <td> 16 </td> <td> Obturație Glasionomer 1-2 suprafețe </td> <td>                       100 </td> </tr>" +

      "<tr> <td> 17 </td> <td> Obturație Glasionomer 3+ suprafețe </td> <td>                        150 </td> </tr>" +

      "<tr> <td> 18 </td> <td> Reconstrucție frontal fracturat </td> <td>                           350 </td> </tr>" +

      "<tr> <td> 19 </td> <td> Alicare digă </td> <td>                           30 </td> </tr>" +

      "<tr> <td> 20 </td> <td> Indepartare dispozitiv corono-radicular / canal </td> <td>           70 </td> </tr>" +

      "<tr> <td> 21 </td> <td> Etapa tratament intermediar endo (CAOH, EDTA) </td> <td>             75 </td> </tr>" +

      "<tr> <td> 22 </td> <td> Tratament endo dinți temporari </td> <td>                             75 </td> </tr>" +

      "<tr> <td> 23 </td> <td> Tratament endo dinți monoradiculari </td> <td>                             150 </td> </tr>" +

      "<tr> <td> 24 </td> <td> Tratament endo dinți pluriradiculari (2 canale) </td> <td>                 200 </td> </tr>" +

      "<tr> <td> 25 </td> <td> Tratament endo dinți pluriradiculari (3-4 canale) </td> <td>               300 </td> </tr>" +

      "<tr> <td> 26 </td> <td> Retratament endo dinți monoradiculari </td> <td>                           220 </td> </tr>" +

      "<tr> <td> 27 </td> <td> Retratament endo dinți pluriradiculari (2 canale) </td> <td>               270 </td> </tr>" +

      "<tr> <td> 28 </td> <td> Retratament endo dinți pluriradiculari (3-4 canale) </td> <td>             390 </td> </tr>" +

      "<tr> <td> 29 </td> <td> Drenaj endodontic </td> <td>                                         100 </td> </tr>" +

      "<tr> <td> 30 </td> <td> Obturație canal MTA </td> <td>                                       150 </td> </tr>" +

      "<tr> <td> 31 </td> <td> Obturație MTA canal pluriradicular dinte temporar </td> <td>         80 </td> </tr>" +

      "<tr> <td> 32 </td> <td> Imobilizare temporară compozit </td> <td>                            150 </td> </tr>" +

      "<tr> <td> 33 </td> <td> Imobilizare temporară viplă </td> <td>                               250 </td> </tr>" +

      "<tr> <td> 34 </td> <td> Imobilizare temporară fibră de sticlă </td> <td>                     600 </td> </tr>" +

      "<tr> <td> 35 </td> <td> Chiuretaj gingival fără lambou / dinte </td> <td>                    50 </td> </tr>" +

      "<tr> <td> 36 </td> <td> Tratament parodontal medicamentos </td> <td>                         200 </td> </tr>" +

      "<tr> <td> 37 </td> <td> Albire endodontică / dinte / sedinta </td> <td>                       50 </td> </tr>" +

      "<tr> <td> 38 </td> <td> Albire profesională in cabinet </td> <td>                             850 </td> </tr>" +

      "<tr> <td> 39 </td> <td> Albire profesională la domiciliu </td> <td>                           700 </td> </tr>" +

      "<tr> <td> 40 </td> <td> Modele Diagnostice / arcadă </td> <td>                               50 </td> </tr>" +

      "<tr> <td> 41 </td> <td> Modelare Diagnostică Ceară / arcada </td> <td>                       150</td> </tr></tbody></table>").removeClass('platinum gold silver')

} else if (service === "Ortodonție") {

  modal.find('.modal-body').html(

    "<table class='table table-striped'>" +

    "<tbody><tr> <th>#</th> <th>" + service + "</th> <th>Ron</th>" +

    "<tr> <td> 1 </td> <td> Aparat Mobil / arcada </td> <td>                                        1000 </td> </tr>" +

    "<tr> <td> 2 </td> <td> Aparat fix metalic / arcada </td> <td>                                  2100 </td> </tr>" +

    "<tr> <td> 3 </td> <td> Aparat fix ceramic / arcada </td> <td>                                  2600 </td> </tr>" +

    "<tr> <td> 4 </td> <td> Aparat fix safir per arcada </td> <td>                                  3200 </td> </tr>" +

    "<tr> <td> 5 </td> <td> Aparat fix lingual (Incognito) / arcada </td> <td>                      2500 € </td> </tr>" +

    "<tr> <td> 6 </td> <td> Disjunctor / arcada </td> <td>                                          1200 </td> </tr>" +

    "<tr> <td> 7 </td> <td> Control aparat fix </td> <td>                                           75 </td> </tr>" +

    "<tr> <td> 8 </td> <td> Control aparat mobil </td> <td>                                         50 </td> </tr>" +

    "<tr> <td> 9 </td> <td> Inlocuire bracket ceramic-relipire </td> <td>                           50 </td> </tr>" +

    "<tr> <td> 10 </td> <td> Inlocuire bracket metalic </td> <td>                                   50 </td> </tr>" +

    "<tr> <td> 11 </td> <td> Inlocuire braket dezlipit </td> <td>                                   50 </td> </tr>" +

    "<tr> <td> 12 </td> <td> Inlocuire inel rupt </td> <td>                                         50 </td> </tr>" +

    "<tr> <td> 13 </td> <td> Lip bumber/ arc transpalatinal </td> <td>                              600 </td> </tr>" +

    "<tr> <td> 14 </td> <td> Monobloc activator </td> <td>                                          1200 </td> </tr>" +

    "<tr> <td> 15 </td> <td> Pendulum </td> <td>                                                    600 </td> </tr>" +

    "<tr> <td> 17 </td> <td> Retainer colat metalic </td> <td>                                      350 </td> </tr>" +

    "<tr> <td> 18  </td> <td> Gutieră contentie / arcada </td> <td>                                 350 </td> </tr></tbody></table>").removeClass('platinum gold silver')

} else if (service === "Protetică") {

  modal.find('.modal-body').html(

    "<table class='table table-striped'>" +

    "<tbody><tr> <th>#</th> <th>" + service + "</th> <th>Ron</th>" +

    "<tr> <td> 1 </td> <td> Captusire directa proteza </td> <td>                                    150 </td> </tr>" +

    "<tr> <td> 2 </td> <td> Captusire indirecta proteza </td> <td>                                  250 </td> </tr>" +

    "<tr> <td> 3 </td> <td> Cimentat punte / dinte / element </td> <td>                             30 </td> </tr>" +

    "<tr> <td> 4 </td> <td> Coroana CAD-CAM provizorie acrilat / laborator </td> <td>               200 </td> </tr>" +

    "<tr> <td> 5 </td> <td> Coroana provizorie acrilat laborator </td> <td>                         75 </td> </tr>" +

    "<tr> <td> 6 </td> <td> Coroana provizorie compozit cabinet </td> <td>                          75 </td> </tr>" +

    "<tr> <td> 7 </td> <td> Coroana provizorie prefabricata </td> <td>                              100 </td> </tr>" +

    "<tr> <td> 8 </td> <td> Coroana Wiser (metalica cu fațetă de compozit/acrilat) </td> <td>       300 </td> </tr>" +

    "<tr> <td> 9 </td> <td> Coroana metalica </td> <td>                                             250 </td> </tr>" +

    "<tr> <td> 10 </td> <td> Coroana metalo-ceramica integral fizionomica </td> <td>                600 </td> </tr>" +

    "<tr> <td> 11 </td> <td> Coroana metalo-ceramica semifizionomica </td> <td>                     400 </td> </tr>" +

    "<tr> <td> 12 </td> <td> Coroana metalo-ceramica Ivoclar </td> <td>                             800 </td> </tr>" +

    "<tr> <td> 13 </td> <td> Coroana integral ceramica </td> <td>                                   800 </td> </tr>" +

    "<tr> <td> 14 </td> <td> Coroana E-Max integral ceramica </td> <td>                             900 </td> </tr>" +

    "<tr> <td> 15 </td> <td> Coroana Zirconiu </td> <td>                                            900 </td> </tr>" +

    "<tr> <td> 16 </td> <td> Coroana Zirconiu placat cu ceramică </td> <td>                         1000 </td> </tr>" +

    "<tr> <td> 17 </td> <td> Coroana metalo-ceramica pe implant </td> <td>                          900 </td> </tr>" +

    "<tr> <td> 18 </td> <td> Coroana zirconiu pe implant </td> <td>                                 1100 </td> </tr>" +

    "<tr> <td> 19 </td> <td> Coroana provizorie pe implant </td> <td>                               300 </td> </tr>" +

    "<tr> <td> 20 </td> <td> Echilibrare ocluzală </td> <td>                                        500 </td> </tr>" +

    "<tr> <td> 21 </td> <td> Fațetă ceramica / dinte </td> <td>                                     900 </td> </tr>" +

    "<tr> <td> 22 </td> <td> Fațetă compozit direct / dinte </td> <td>                              250 </td> </tr>" +

    "<tr> <td> 23 </td> <td> Fațetă compozit  in laborator / dinte </td> <td>                       450 </td> </tr>" +

    "<tr> <td> 24 </td> <td> Inlay ceramic </td> <td>                                               800 </td> </tr>" +

    "<tr> <td> 25 </td> <td> Onlay ceramic </td> <td>                                               800 </td> </tr>" +

    "<tr> <td> 26 </td> <td> Inlay compozit </td> <td>                                              550 </td> </tr>" +

    "<tr> <td> 27 </td> <td> Onlay compozit </td> <td>                                              550 </td> </tr>" +

    "<tr> <td> 28 </td> <td> Adaugare croset metalic in proteza </td> <td>                          100 </td> </tr>" +

    "<tr> <td> 29 </td> <td> Adaugare dinte pe proteza acrilică </td> <td>                          100 </td> </tr>" +

    "<tr> <td> 30 </td> <td> Reparație baza proteza fracturata </td> <td>                           200 </td> </tr>" +

    "<tr> <td> 31 </td> <td> Ajustare/Retus proteza superioara/inferioara </td> <td>                50 </td> </tr>" +

    "<tr> <td> 32 </td> <td> Ablație coroana de acoperire </td> <td>                                50 </td> </tr>" +

    "<tr> <td> 33 </td> <td> Ablație coroana de acoperire 2 elemente </td> <td>                     75 </td> </tr>" +

    "<tr> <td> 34 </td> <td> Ablație coroana de acoperire  >> 3 elemente </td> <td>                 100 </td> </tr>" +

    "<tr> <td> 35 </td> <td> Inregistrare arc facial </td> <td>                                     100 </td> </tr>" +

    "<tr> <td> 36 </td> <td> Proteza maxilara/mandibulara pe bara / implante </td> <td>             5000 </td> </tr>" +

    "<tr> <td> 37 </td> <td> Proteza maxială/mandibulara cu capse / implante </td> <td>             3500 </td> </tr>" +

    "<tr> <td> 38 </td> <td> Proteza partială acrilică / arcada </td> <td>                          1000 </td> </tr>" +

    "<tr> <td> 39 </td> <td> Proteza scheletata cu culise sau capse </td> <td>                      2800 </td> </tr>" +

    "<tr> <td> 40 </td> <td> Proteza totală acrilică / arcada </td> <td>                            1000 </td> </tr>" +

    "<tr> <td> 41 </td> <td> Proteza totală elastica / arcada </td> <td>                            1500 </td> </tr>" +

    "<tr> <td> 42 </td> <td> Plasa armare proteza totală </td> <td>                                 100 </td> </tr>" +

    "<tr> <td> 43 </td> <td> Pivot metalic </td> <td>                                               200 </td> </tr>" +

    "<tr> <td> 44 </td> <td> Pivot fibra sticla </td> <td>                                          150 </td> </tr>" +

    "<tr> <td> 45 </td> <td> Proteza cu capse minus capsele </td> <td>                              1500 </td> </tr>" +

    "<tr> <td> 46 </td> <td> Capse proteza / buc </td> <td>                                         250 </td> </tr>" +

    "<tr> <td> 47 </td> <td> Recimentare coroana / punte </td> <td>                                   50 </td> </tr></tbody></table>").removeClass('platinum gold silver')

} else if (service === "Chirurgie / Implantologie") {

  modal.find('.modal-body').html(

    "<table class='table table-striped'>" +

    "<tbody><tr> <th>#</th> <th>" + service + "</th> <th>Medic specialist</th>" +

    "<tr> <td>1 </td> <td>Extracție dinte lapte                                       </td><td>              75          </td> </tr>"+

    "<tr> <td>2 </td> <td>Extracție monoradiculari (incisivi - canini - premolari)    </td> <td>             100 - 150         </td> </tr>"+

    "<tr> <td>3 </td> <td>Extracție pluridiculari                                   </td> <td>             200      </td> </tr>"+

    "<tr> <td>4 </td> <td>Extracție prin alveolotomie                                 </td><td>              250        </td> </tr>"+

    "<tr> <td>5 </td> <td>Extracție molari de minte                                   </td><td>              250        </td> </tr>"+

    "<tr> <td>6 </td> <td>Odontectomia (C,PM inclus; M3 semiinclus, M3 inclus)        </td><td>              450          </td> </tr>"+

    "<tr> <td>7</td> <td>Decapusonare                                               </td> <td>           150        </td> </tr>"+

    "<tr> <td>8</td> <td>Descoperire dinte inclus                                   </td> <td>           450        </td> </tr>"+

    "<tr> <td>9</td> <td>Drenaj                                                     </td> <td>           150        </td> </tr>"+

    "<tr> <td>10</td> <td>Gingivectomie / dinte                                      </td> <td>            150       </td> </tr>"+

    "<tr> <td>11</td> <td>Incizie abces                                              </td> <td>           150        </td> </tr>"+

    "<tr> <td>12</td> <td>Inserare Implant Alpha Bio                                 </td> <td>           400 €       </td> </tr>"+

    "<tr> <td>13</td> <td>Inserare Implant Sweden&Martina                            </td> <td>           600 €     </td> </tr>"+

    "<tr> <td>14</td> <td>Bont Alpha Bio                                             </td> <td>           50 €        </td> </tr>"+

    "<tr> <td>15</td> <td>Bont Sweden&Martina                                        </td> <td>           100 €       </td> </tr>"+

    "<tr> <td>16</td> <td>Rezecție apicală grup frontal                              </td> <td>           450        </td> </tr>"+

    "<tr> <td>17</td> <td>Rezecție apicală molari                                    </td>  <td>           600        </td> </tr>"+

    "<tr> <td>18</td> <td>Aditie osoasa (extracție, rezecție apicală)                </td>  <td>           600        </td> </tr>"+

    "<tr> <td>19</td> <td>Regularizare chirurgicală creasta/arcada                   </td> <td>           250        </td> </tr>"+

    "<tr> <td>20</td> <td>Regularizare gingivală / arcada                            </td> <td>           100        </td> </tr>"+

    "<tr> <td>21</td> <td>Tratament alveolita / sedinta                              </td> <td>            100        </td> </tr>"+

    "<tr> <td>22</td> <td>Chistectomie                                               </td>  <td>           500        </td> </tr>"+

    "<tr> <td>23</td> <td>Chiuretaj gingival cu lambou / dinte                       </td>  <td>           250        </td> </tr>"+

    "<tr> <td>24</td> <td>Chiuretaj gingival cu lambou / arcada                      </td> <td>           800        </td> </tr>"+

    "<tr> <td>25</td> <td>Chiuretaj periimplantar                                    </td> <td>           850        </td> </tr>"+

    "<tr> <td>26</td> <td>Regenerare osoasa 1-3                                      </td> <td>           300 €     </td> </tr>"+

    "<tr> <td>27</td> <td>Regenerare osoasa ghidat a crestei alevolare              </td> <td>           400 €    </td> </tr>"+

    "<tr> <td>28</td> <td>Membrana resorbabila colagen                               </td> <td>           100 €     </td> </tr>"+

    "<tr> <td>29</td> <td>Plastia comunicarii oro-sinusale                           </td> <td>           200        </td> </tr>"+

    "<tr> <td>30</td> <td>Alveoloplastie (regularizarea procesului alveolar)         </td> <td>           200        </td> </tr>"+

    "<tr> <td>31</td> <td>Premolarizare                                              </td>  <td>           200        </td> </tr>"+

    "<tr> <td>32</td> <td>Amputație radiculara                                       </td>  <td>           250        </td> </tr>"+

    "<tr> <td>33</td> <td>Frenectomie                                                </td>  <td>           300        </td> </tr>"+

    "<tr> <td>34</td> <td>Biopsie de glande salivare minore                          </td>  <td>           300        </td> </tr>"+

    "<tr> <td>35</td> <td>Plastie torus                                              </td>  <td>           350        </td> </tr>"+

    "<tr> <td>36</td> <td>Extirparea/excizia tumorilor benigne de mici dimensiuni ale" +

    "partilor moi orale (papilom, mucocel, epulis)  </td>                                   <td>          300        </td> </tr>" +

    "<tr> <td>37</td> <td>Elevare sinus maxilar abordare externa                      </td> <td>               900 €       </td> </tr>"+

    "<tr> <td>38</td> <td>Elevare sinus maxilar abordare interna                      </td> <td>               300 €       </td> </tr>"+

    "<tr> <td>39</td> <td>Cura paratială sinus maxilar                              </td> <td>            2000      </td> </tr>"+

    "<tr> <td>40</td> <td>Cura totală sinus maxilar                                  </td> <td>            2500      </td> </tr>"+

    " </tbody></table>").removeClass('platinum gold silver')

} else if (service === "Abonament silver") {

  modal.find('.modal-body').html(

    "<div class='silver'>"+

    "<table class='table'>" +

    "<tbody><tr> <th>#</th> <th>" + service + "</th> <th>Pre&#539; Normal</th><th>Pre&#539; Abonament</th>"+

    "<tr><td>1</td><td>Tratament 1 urgen&#539;&#259;</td><td>100</td><td>Gratuit</td></tr>" +

    "<tr><td>2</td><td>Consulta&#539;ie</td><td>50</td><td>Gratuit</td></tr>" +

    "<tr><td>3</td><td>Consulta&#539;ie medic specialist/Plan Tratament</td><td>100</td><td>Gratuit</td></tr>" +

    "<tr class='heading-bg'><td>&nbsp;</td><td colspan='3' style='text-align:center' class='text-uppercase'><strong>Profilaxie Dentar&#259;</strong></td></tr>" +

    "<tr><td>4</td><td>Detartraj cu ultrasunete/periaj prof./air flow</td><td>220</td><td>50%</td></tr>" +

    "<tr><td>5</td><td>Fluorizare / arcada</td><td>50</td><td>Gratuit</td></tr>" +

    "<tr><td>6</td><td>Gutiera fluorizare / arcada</td><td>50</td><td>x</td></tr>" +

    "<tr class='heading-bg'><td>&nbsp;</td><td colspan='3' style='text-align:center' class='text-uppercase'><strong>Estetic&#259;</strong></td></tr>" +

    "<tr><td>7</td><td>Albire profesionala la domiciliu</td><td>700</td><td>25%</td></tr>" +

    "<tr><td>&nbsp;</td><td colspan='3' style='text-align:center' class='text-uppercase'><strong>Terapie</strong></td></tr>" +

    "<tr><td>8</td><td>Obturatie Glasionomer 1-2 suprafete</td><td>100</td><td>25%</td></tr>" +

    "<tr><td>9</td><td>Obturatie Glasionomer 3+ suprafete</td><td>150</td><td>25%</td></tr>" +

    "<tr><td>10</td><td>Obturatie compozit 1 suprafata</td><td>110</td><td>10%</td></tr>" +

    "<tr><td>11</td><td>Obturatie compozit 2 suprafete</td><td>150</td><td>10%</td></tr>" +

    "<tr><td>12</td><td>Obturatie compozit 3+ suprafete</td><td>200</td><td>10%</td></tr>" +

    "<tr><td>&nbsp;</td><td colspan='3' style='text-align:center' class='text-uppercase'><strong>Endodontie</strong></td></tr>" +

    "<tr><td>13</td><td>Tratament endo monoradiculari</td><td>150</td><td>10%</td></tr>" +

    "<tr><td>14</td><td>Tratament endo pluriradiculari (2 canale)</td><td>200</td><td>10%</td></tr>" +

    "<tr><td>15</td><td>Tratament endo pluriradiculari (3-4 canale)</td><td>300</td><td>10%</td></tr>" +

    "<tr><td>16</td><td>Retratament endo monoradiculari</td><td>220</td><td>10%</td></tr>" +

    "<tr><td>17</td><td>Retratament endo pluriradiculari (2 canale)</td><td>270</td><td>10%</td></tr>" +

    "<tr><td>18</td><td>Retratament endo pluriradiculari (3-4 canale)</td><td>390</td><td>10%</td></tr>" +

    "<tr><td>19</td><td>Etapa tratament intermediar endo (CAOH, EDTA)</td><td>70</td><td>50%</td></tr>" +

    "<tr><td>20</td><td>Drenaj endodontic</td><td>100</td><td>25%</td></tr>" +

    "<tr><td>&nbsp;</td><td colspan='3' style='text-align:center' class='text-uppercase'><strong>Chirurgie</strong></td></tr>" +

    "<tr><td>21</td><td>Extractie 1 dinte monoradicular</td><td>100</td><td>50%</td></tr>" +

    "<tr><td>22</td><td>Extractie 1 dinte pluriradicular</td><td>150</td><td>25%</td></tr>" +

    "<tr><td>23</td><td>Extrac&#539;ie 1 dinte -  rest radicular</td><td>150</td><td>50%</td></tr>" +

    "<tr><td>&nbsp;</td><td colspan='3' style='text-align:center' class='text-uppercase'><strong>Ortodontie</strong></td></tr>" +

    "<tr><td>32</td><td>Aparat Mobil / arcada</td><td>1000</td><td>5%</td></tr>" +

    "<tr><td>33</td><td>Aparat fix metalic / arcada</td><td>2100</td><td>5%</td></tr>" +

    "<tr><td>34</td><td>Aparat fix ceramic / arcada</td><td>2600</td><td>5%</td></tr>" +

    "<tr><td>35</td><td>Aparat fix safir per arcada</td><td>3200</td><td>5%</td></tr>" +

    "<tr><td>&nbsp;</td><td colspan='3' style='text-align:center' class='text-uppercase'><strong>Protetica</strong></td></tr>" +

    "<tr><td>24</td><td>Gutiera bruxism</td><td>300</td><td>x</td></tr>" +

    "<tr><td>25</td><td>Coroana metalica</td><td>250</td><td>x</td></tr>" +

    "<tr><td>26</td><td>Coroana metalo-ceramica integral fizionomica</td><td>600</td><td>x</td></tr>" +

    "<tr><td>27</td><td>Coroana metalo-ceramica semifizionomica</td><td>400</td><td>x</td></tr>" +

    "<tr><td>28</td><td>Coroana metalo-ceramica Ivoclar</td><td>800</td><td>x</td></tr>" +

    "<tr><td>29</td><td>Coroana E-Max integral ceramica</td><td>900</td><td>x</td></tr>" +

    "<tr><td>30</td><td>Coroana Zirconiu</td><td>900</td><td>x</td></tr>" +

    "<tr><td>31</td><td>Coroana Zirconiu placat cu ceramic&#259;</td><td>1000</td><td>x</td></tr>" +

    "<tr><td>&nbsp;</td><td colspan='3' style='text-align:center' class='text-uppercase'><strong>Implantologie  / Chirurgie mare</strong></td></tr>" +

    "<tr><td>32</td><td>Inserare Implant Zimmer (SUA)</td><td>600 E</td><td>x</td></tr>" +

    "<tr><td>33</td><td>Inserare Implant PI (Suedia)</td><td>400 E</td><td>x</td></tr>" +

    "<tr><td>34</td><td>Elevare sinus maxilar abordare extern&#259;</td><td>900 E</td><td>x</td></tr>" +

    "<tr><td>35</td><td>Elevare sinus maxilar abordare intern&#259;</td><td>300 E</td><td>x</td></tr>" +

    "<tr><td>36</td><td>Extrac&#539;ie molari de minte</td><td>250</td><td>x</td></tr>" +

    "<tr><td>37</td><td>Decapu&#537;onare</td><td>150</td><td>x</td></tr>" +

    "<tr><td>38</td><td>Incizie abces</td><td>150</td><td>x</td></tr>" +

    "<tr><td>39</td><td>Extirparea/excizia tumorilor benigne de mici dimensiuni ale p&#259;r&#539;ilor moi orale (papilom, mucocel, epulis)</td><td>300</td><td>x</td></tr>" +

    "<tr><td>40</td><td>Frenectomie</td><td>250</td><td>x</td></tr>" +

    "<tr><td>41</td><td>Plastia comunic&#259;rii oro-sinusale</td><td>200</td><td>x</td></tr></tbody></table></div>").addClass('silver').removeClass('platinum gold kidss')

}

else if (service === "Abonament gold") {

  modal.find('.modal-body').html(

    "<div class='gold'>"+

    "<table class='table'>" +

    "<tbody><tr> <th>#</th> <th style='text-align:center'>" + service + "</th> <th style='width=90px'>Pre&#539; Normal</th><th>Pre&#539; Abonament</th>"+

    "<tr><td>1</td><td>Tratament 1 urgen&#539;&#259;</td><td>100</td><td>Gratuit</td></tr>" +

    "<tr><td>2</td><td>Consulta&#539;ie</td><td>50</td><td>Gratuit</td></tr>" +

    "<tr><td>3</td><td>Consulta&#539;ie medic specialist/Plan Tratament</td><td>100</td><td>Gratuit</td></tr>" +

    "<tr><td>&nbsp;</td><td colspan='3' style='text-align:center' class='text-uppercase'><strong>Profilaxie Dentar&#259;</strong></td></tr>" +

    "<tr><td>4</td><td>Detartraj cu ultrasunete/periaj prof./air flow</td><td>220</td><td>Gratuit</td></tr>" +

    "<tr><td>5</td><td>Fluorizare / arcada</td><td>50</td><td>Gratuit</td></tr>" +

    "<tr><td>6</td><td>Gutiera fluorizare / arcada</td><td>50</td><td>50%</td></tr>" +

    "<tr><td>&nbsp;</td><td colspan='3' style='text-align:center' class='text-uppercase'><strong>Estetic&#259;</strong></td></tr>" +

    "<tr><td>7</td><td>Albire profesionala la domiciliu</td><td>700</td><td>40%</td></tr>" +

    "<tr><td>&nbsp;</td><td colspan='3' style='text-align:center' class='text-uppercase'><strong>Terapie</strong></td></tr>" +

    "<tr><td>8</td><td>Obturatie Glasionomer 1-2 suprafete</td><td>100</td><td>50%</td></tr>" +

    "<tr><td>9</td><td>Obturatie Glasionomer 3+ suprafete</td><td>150</td><td>50%</td></tr>" +

    "<tr><td>10</td><td>Obturatie compozit 1 suprafata</td><td>110</td><td>20%</td></tr>" +

    "<tr><td>11</td><td>Obturatie compozit 2 suprafete</td><td>150</td><td>20%</td></tr>" +

    "<tr><td>12</td><td>Obturatie compozit 3+ suprafete</td><td>200</td><td>20%</td></tr>" +

    "<tr><td>&nbsp;</td><td colspan='3' style='text-align:center' class='text-uppercase'><strong>Endodontie</strong></td></tr>" +

    "<tr><td>13</td><td>Tratament endo monoradiculari</td><td>150</td><td>20%</td></tr>" +

    "<tr><td>14</td><td>Tratament endo pluriradiculari (2 canale)</td><td>200</td><td>20%</td></tr>" +

    "<tr><td>15</td><td>Tratament endo pluriradiculari (3-4 canale)</td><td>300</td><td>20%</td></tr>" +

    "<tr><td>16</td><td>Retratament endo monoradiculari</td><td>220</td><td>20%</td></tr>" +

    "<tr><td>17</td><td>Retratament endo pluriradiculari (2 canale)</td><td>270</td><td>20%</td></tr>" +

    "<tr><td>18</td><td>Retratament endo pluriradiculari (3-4 canale)</td><td>390</td><td>20%</td></tr>" +

    "<tr><td>19</td><td>Etapa tratament intermediar endo (CAOH, EDTA)</td><td>70</td><td>Gratuit</td></tr>" +

    "<tr><td>20</td><td>Drenaj endodontic</td><td>100</td><td>50%</td></tr>" +

    "<tr><td>&nbsp;</td><td colspan='3' style='text-align:center' class='text-uppercase'><strong>Chirurgie</strong></td></tr>" +

    "<tr><td>21</td><td>Extractie 1 dinte monoradicular</td><td>100</td><td>Gratuit</td></tr>" +

    "<tr><td>22</td><td>Extractie 1 dinte pluriradicular</td><td>150</td><td>50%</td></tr>" +

    "<tr><td>23</td><td>Extrac&#539;ie 1 dinte -  rest radicular</td><td>150</td><td>Gratuit</td></tr>" +

    "<tr><td>&nbsp;</td><td colspan='3' style='text-align:center' class='text-uppercase'><strong>Ortodontie</strong></td></tr>" +

    "<tr><td>32</td><td>Aparat Mobil / arcada</td><td>1000</td><td>10%</td></tr>" +

    "<tr><td>33</td><td>Aparat fix metalic / arcada</td><td>2100</td><td>10%</td></tr>" +

    "<tr><td>34</td><td>Aparat fix ceramic / arcada</td><td>2600</td><td>10%</td></tr>" +

    "<tr><td>35</td><td>Aparat fix safir per arcada</td><td>3200</td><td>10%</td></tr>" +

    "<tr><td>&nbsp;</td><td colspan='3' style='text-align:center' class='text-uppercase'><strong>Protetica</strong></td></tr>" +

    "<tr><td>24</td><td>Gutiera bruxism</td><td>300</td><td>5%</td></tr>" +

    "<tr><td>25</td><td>Coroana metalica</td><td>250</td><td>5%</td></tr>" +

    "<tr><td>26</td><td>Coroana metalo-ceramica integral fizionomica</td><td>600</td><td>5%</td></tr>" +

    "<tr><td>27</td><td>Coroana metalo-ceramica semifizionomica</td><td>400</td><td>5%</td></tr>" +

    "<tr><td>28</td><td>Coroana metalo-ceramica Ivoclar</td><td>800</td><td>5%</td></tr>" +

    "<tr><td>29</td><td>Coroana E-Max integral ceramica</td><td>900</td><td>5%</td></tr>" +

    "<tr><td>30</td><td>Coroana Zirconiu</td><td>900</td><td>5%</td></tr>" +

    "<tr><td>31</td><td>Coroana Zirconiu placat cu ceramic&#259;</td><td>1000</td><td>5%</td></tr>" +

    "<tr><td>&nbsp;</td><td colspan='3' style='text-align:center' class='text-uppercase'><strong>Implantologie  / Chirurgie mare</strong></td></tr>" +

    "<tr><td>32</td><td>Inserare Implant Zimmer (SUA)</td><td>600 E</td><td>x</td></tr>" +

    "<tr><td>33</td><td>Inserare Implant PI (Suedia)</td><td>400 E</td><td>x</td></tr>" +

    "<tr><td>34</td><td>Elevare sinus maxilar abordare extern&#259;</td><td>900 E</td><td>x</td></tr>" +

    "<tr><td>35</td><td>Elevare sinus maxilar abordare intern&#259;</td><td>300 E</td><td>x</td></tr>" +

    "<tr><td>36</td><td>Extrac&#539;ie molari de minte</td><td>250</td><td>x</td></tr>" +

    "<tr><td>37</td><td>Decapu&#537;onare</td><td>150</td><td>x</td></tr>" +

    "<tr><td>38</td><td>Incizie abces</td><td>150</td><td>x</td></tr>" +

    "<tr><td>39</td><td>Extirparea/excizia tumorilor benigne de mici dimensiuni ale p&#259;r&#539;ilor moi orale (papilom, mucocel, epulis)</td><td>300</td><td>x</td></tr>" +

    "<tr><td>40</td><td>Frenectomie</td><td>250</td><td>x</td></tr>" +

    "<tr><td>41</td><td>Plastia comunic&#259;rii oro-sinusale</td><td>200</td><td>x</td></tr></tbody></table></div>").addClass('gold').removeClass('silver platinum kidss')

}

else if (service === "Abonament platinum") {

  modal.find('.modal-body').html(

    "<div class='platinum'>"+

    "<table class='table'>" +

    "<tbody><tr> <th>#</th> <th>" + service + "</th> <th>Pre&#539; Normal</th><th>Pre&#539; Abonament</th>"+

    "<tr><td>1</td><td>Tratament 1 urgen&#539;&#259;</td><td>100</td><td>Gratuit</td></tr>" +

    "<tr><td>2</td><td>Consulta&#539;ie</td><td>50</td><td>Gratuit</td></tr>" +

    "<tr><td>3</td><td>Consulta&#539;ie medic specialist/Plan Tratament</td><td>100</td><td>Gratuit</td></tr>" +

    "<tr><td>&nbsp;</td ><td colspan='3' style='text-align:center' class='text-uppercase'><strong>Profilaxie Dentar&#259;</strong></td></tr>" +

    "<tr><td>4</td><td>Detartraj cu ultrasunete/periaj prof./air flow</td><td>220</td><td>Gratuit</td></tr>" +

    "<tr><td>5</td><td>Fluorizare / arcada</td><td>50</td><td>Gratuit</td></tr>" +

    "<tr><td>6</td><td>Gutiera fluorizare / arcada</td><td>50</td><td>50%</td></tr>" +

    "<tr><td>&nbsp;</td><td colspan='3' style='text-align:center' class='text-uppercase'><strong>Estetic&#259;</strong></td></tr>" +

    "<tr><td>7</td><td>Albire profesionala la domiciliu</td><td>700</td><td>50%</td></tr>" +

    "<tr><td>&nbsp;</td><td colspan='3' style='text-align:center' class='text-uppercase'><strong>Terapie</strong></td></tr>" +

    "<tr><td>8</td><td>Obturatie Glasionomer 1-2 suprafete</td><td>100</td><td>Gratuit</td></tr>" +

    "<tr><td>9</td><td>Obturatie Glasionomer 3+ suprafete</td><td>150</td><td>Gratuit</td></tr>" +

    "<tr><td>10</td><td>Obturatie compozit 1 suprafata</td><td>110</td><td>25%</td></tr>" +

    "<tr><td>11</td><td>Obturatie compozit 2 suprafete</td><td>150</td><td>25%</td></tr>" +

    "<tr><td>12</td><td>Obturatie compozit 3+ suprafete</td><td>200</td><td>25%</td></tr>" +

    "<tr><td>&nbsp;</td><td colspan='3' style='text-align:center' class='text-uppercase'><strong>Endodontie</strong></td></tr>" +

    "<tr><td>13</td><td>Tratament endo monoradiculari</td><td>150</td><td>20%</td></tr>" +

    "<tr><td>14</td><td>Tratament endo pluriradiculari (2 canale)</td><td>200</td><td>20%</td></tr>" +

    "<tr><td>15</td><td>Tratament endo pluriradiculari (3-4 canale)</td><td>300</td><td>20%</td></tr>" +

    "<tr><td>16</td><td>Retratament endo monoradiculari</td><td>220</td><td>20%</td></tr>" +

    "<tr><td>17</td><td>Retratament endo pluriradiculari (2 canale)</td><td>270</td><td>20%</td></tr>" +

    "<tr><td>18</td><td>Retratament endo pluriradiculari (3-4 canale)</td><td>390</td><td>20%</td></tr>" +

    "<tr><td>19</td><td>Etapa tratament intermediar endo (CAOH, EDTA)</td><td>70</td><td>Gratuit</td></tr>" +

    "<tr><td>20</td><td>Drenaj endodontic</td><td>100</td><td>50%</td></tr>" +

    "<tr><td>&nbsp;</td><td colspan='3' style='text-align:center' class='text-uppercase'><strong>Chirurgie</strong></td></tr>" +

    "<tr><td>21</td><td>Extractie 1 dinte monoradicular</td><td>100</td><td>Gratuit</td></tr>" +

    "<tr><td>22</td><td>Extractie 1 dinte pluriradicular</td><td>150</td><td>50%</td></tr>" +

    "<tr><td>23</td><td>Extrac&#539;ie 1 dinte -  rest radicular</td><td>150</td><td>Gratuit</td></tr>" +

    "<tr><td>&nbsp;</td><td colspan='3' style='text-align:center' class='text-uppercase'><strong>Ortodontie</strong></td></tr>" +

    "<tr><td>32</td><td>Aparat Mobil / arcada</td><td>1000</td><td>10%</td></tr>" +

    "<tr><td>33</td><td>Aparat fix metalic / arcada</td><td>2100</td><td>10%</td></tr>" +

    "<tr><td>34</td><td>Aparat fix ceramic / arcada</td><td>2600</td><td>10%</td></tr>" +

    "<tr><td>35</td><td>Aparat fix safir per arcada</td><td>3200</td><td>10%</td></tr>" +

    "<tr><td>&nbsp;</td><td colspan='3' style='text-align:center' class='text-uppercase'><strong>Protetica</strong></td></tr>" +

    "<tr><td>24</td><td>Gutiera bruxism</td><td>300</td><td>10%</td></tr>" +

    "<tr><td>25</td><td>Coroana metalica</td><td>250</td><td>10%</td></tr>" +

    "<tr><td>26</td><td>Coroana metalo-ceramica integral fizionomica</td><td>600</td><td>10%</td></tr>" +

    "<tr><td>27</td><td>Coroana metalo-ceramica semifizionomica</td><td>400</td><td>10%</td></tr>" +

    "<tr><td>28</td><td>Coroana metalo-ceramica Ivoclar</td><td>800</td><td>10%</td></tr>" +

    "<tr><td>29</td><td>Coroana E-Max integral ceramica</td><td>900</td><td>10%</td></tr>" +

    "<tr><td>30</td><td>Coroana Zirconiu</td><td>900</td><td>10%</td></tr>" +

    "<tr><td>31</td><td>Coroana Zirconiu placat cu ceramic&#259;</td><td>1000</td><td>10%</td></tr>" +

    "<tr><td>&nbsp;</td><td colspan='3' style='text-align:center' class='text-uppercase'><strong>Implantologie  / Chirurgie mare</strong></td></tr>" +

    "<tr><td>32</td><td>Inserare Implant Zimmer (SUA)</td><td>600 E</td><td>5%</td></tr>" +

    "<tr><td>33</td><td>Inserare Implant PI (Suedia)</td><td>400 E</td><td>10%</td></tr>" +

    "<tr><td>34</td><td>Elevare sinus maxilar abordare extern&#259;</td><td>900 E</td><td>5%</td></tr>" +

    "<tr><td>35</td><td>Elevare sinus maxilar abordare intern&#259;</td><td>300 E</td><td>10%</td></tr>" +

    "<tr><td>36</td><td>Extrac&#539;ie molari de minte</td><td>250</td><td>50%</td></tr>" +

    "<tr><td>37</td><td>Decapu&#537;onare</td><td>150</td><td>Gratuit</td></tr>" +

    "<tr><td>38</td><td>Incizie abces</td><td>150</td><td>Gratuit</td></tr>" +

    "<tr><td>39</td><td>Extirparea/excizia tumorilor benigne de mici dimensiuni  ale p&#259;r&#539;ilor moi orale (papilom, mucocel, epulis)</td><td>300</td><td>50%</td></tr>" +

    "<tr><td>40</td><td>Frenectomie</td><td>250</td><td>50%</td></tr>" +

    "<tr><td>41</td><td>Plastia comunic&#259;rii oro-sinusale</td><td>200</td><td>50%</td></tr></table></tbody></div>"

  ).addClass('platinum').removeClass('silver gold kidss')

}

else if (service === "Abonament kids") {
  modal.find('.modal-body').html(

    "<div class='kidss'>"+

    "<table class='table'>" +

    "<tbody><tr> <th>#</th> <th>" + service + "</th> <th>Pre&#539; Normal</th><th>Pre&#539; Abonament</th>"+
    "<tr><td>1</td><td>Tratament urgență</td><td>100</td><td>Gratuit</td></tr>" +
    "<tr><td>2</td><td>Consultație</td><td>100</td><td>Gratuit</td></tr>" +
    "<tr><td>3</td><td>Sigilare șanțuri și fosete dinte</td><td>75</td><td>50%</td></tr>" +
    "<tr><td>4</td><td>Obturație glasionomer dinte temporar</td><td>75</td><td>50%</td></tr>" +
    "<tr><td>5</td><td>Profilaxie copil, dentiție temporară (periaj profesional)</td><td>50</td><td>Gratuit</td></tr>" +
    "<tr><td>6</td><td>Extracție dinte de lapte</td><td>100</td><td>60</td></tr>" +
    "<tr><td>7</td><td>Detartraj cu ultrasunete/periaj profesional/air flow</td><td>220</td><td>50%</td></tr>" +
    "<tr><td>8</td><td>Obturație compozit 1 suprafață</td><td>110</td><td>25%</td></tr>" +
    "<tr><td>9</td><td>Obturație compozit 2 suprafețe</td><td>150</td><td>25%</td></tr>" +
    "<tr><td>10</td><td>Aparat mobil / Arcadă</td><td>1000</td><td>5%</td></tr>" +
    "<tr><td>11</td><td>Aparat fix metalic / Arcadă</td><td>2100</td><td>5%</td></tr>" +
    "<tr><td>12</td><td>Aparat fix ceramic / Arcadă</td><td>2600</td><td>5%</td></tr>" +
    "<tr><td>13</td><td>Aparat fix safir / Arcadă</td><td>3200</td><td>5%</td></tr></table></tbody></div>"
  ).addClass('kidss').removeClass('silver gold platinum')
}



});

 $(function() {

  $('a[href*=#]:not([href=#])').click(function() {

    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {

      var target = $(this.hash);

      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');

      if (target.length) {

        $('html,body').animate({scrollTop: target.offset().top }, 1000);

        return false;

      }

    }

  });

});
