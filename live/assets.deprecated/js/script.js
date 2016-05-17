$('#my-modal').on('show.bs.modal', function (event) {
  var button = $(event.relatedTarget)
  var service = button.data('serviciu')
  var modal = $(this)
  // var head = modal.find('.modal-body .table .table-head').text(service)
  if(service === "Terapie / Endodonție") {
    modal.find('.modal-body .table tbody').html(
      "<tr> <th>#</th> <th>" + service + "</th> <th>Ron</th>" +
      "<tr> <td> 1 </td> <td> Tratament urgent </td> <td> 100 </td> </tr>" +
      "<tr> <td> 2 </td> <td> Albire endodontica / dinte / sedinta </td> <td> 50 </td> </tr>" +
      "<tr> <td> 3 </td> <td> Albire profesionala in cabinet </td> <td> 850 </td> </tr>" +
      "<tr> <td> 4 </td> <td> Albire profesionala la domiciliu </td> <td> 700 </td> </tr>" +
      "<tr> <td> 5 </td> <td> Consultatie </td> <td> 50 </td> </tr>" +
      "<tr> <td> 6 </td> <td> Consultatie medic specialist </td> <td> 100 </td> </tr>" +
      "<tr> <td> 7 </td> <td> Evaluare parodontala detaliata </td> <td> 100 </td> </tr>" +
      "<tr> <td> 8 </td> <td> Sigilare santuri si fosete / dinte </td> <td> 75 </td> </tr>" +
      "<tr> <td> 9 </td> <td> Obturatie glasionomer dinte temporar </td> <td> 75 </td> </tr>" +
      "<tr> <td> 10 </td> <td> Profilaxie copil, denitie temporara (periaj profesional) </td> <td> 50 </td> </tr>" +
      "<tr> <td> 11 </td> <td> Detartraj cu ultrasunete/periaj prof./air flow </td> <td> 220 </td> </tr>" +
      "<tr> <td> 12 </td> <td> Fluorizare / arcada </td> <td> 50 </td> </tr>" +
      "<tr> <td> 13 </td> <td> Gutiera fluorizare / arcada </td> <td> 50 </td> </tr>" +
      "<tr> <td> 14 </td> <td> Gutiera bruxism </td> <td> 150 </td> </tr>" +
      "<tr> <td> 15 </td> <td> Tratament endo monoradiculari </td> <td> 150 </td> </tr>" +
      "<tr> <td> 16 </td> <td> Tratament endo pluriradiculari (2 canale) </td> <td> 200 </td> </tr>" +
      "<tr> <td> 17 </td> <td> Tratament endo pluriradiculari (3-4 canale) </td> <td> 300 </td> </tr>" +
      "<tr> <td> 18 </td> <td> Retratament endo monoradiculari </td> <td> 220 </td> </tr>" +
      "<tr> <td> 19 </td> <td> Retratament endo pluriradiculari (2 canale) </td> <td> 270 </td> </tr>" +
      "<tr> <td> 20 </td> <td> Retratament endo pluriradiculari (3-4 canale) </td> <td> 390 </td> </tr>" +
      "<tr> <td> 21 </td> <td> Etapa tratament intermediar endo (CAOH, EDTA) </td> <td> 70 </td> </tr>" +
      "<tr> <td> 22 </td> <td> Drenaj endodontic </td> <td> 100 </td> </tr>" +
      "<tr> <td> 23 </td> <td> Indepartare dispozitiv corono-radicular / canal </td> <td> 70 </td> </tr>" +
      "<tr> <td> 24 </td> <td> Obturatie Glasionomer 1-2 suprafete </td> <td> 100 </td> </tr>" +
      "<tr> <td> 25 </td> <td> Obturatie Glasionomer 3+ suprafete </td> <td> 150 </td> </tr>" +
      "<tr> <td> 26 </td> <td> Obturatie compozit 1 suprafata </td> <td> 110 </td> </tr>" +
      "<tr> <td> 27 </td> <td> Obturatie compozit 2 suprafete </td> <td> 150 </td> </tr>" +
      "<tr> <td> 28 </td> <td> Obturatie compozit 3+ suprafete </td> <td> 200 </td> </tr>" +
      "<tr> <td> 29 </td> <td> Obturatie canal MTA </td> <td> 150 </td> </tr>" +
      "<tr> <td> 30 </td> <td> Obturatie MTA canal pluriradicular dinte temporar </td> <td> 80 </td> </tr>" +
      "<tr> <td> 31 </td> <td> Reconstructie frontal fracturat </td> <td> 350 </td> </tr>" +
      "<tr> <td> 32 </td> <td> Imobilizare temporara compozit </td> <td> 150 </td> </tr>" +
      "<tr> <td> 33 </td> <td> Imobilizare temporara viplă </td> <td> 250 </td> </tr>" +
      "<tr> <td> 34 </td> <td> Imobilizare temporara fibră de sticlă </td> <td> 600 </td> </tr>" +
      "<tr> <td> 35 </td> <td> Chiuretaj gingival fără lambou / dinte </td> <td> 50 </td> </tr>" +
      "<tr> <td> 36 </td> <td> Tratament parodontal medicamentos </td> <td> 200 </td> </tr>" +
      "<tr> <td> 37 </td> <td> Radiografie Bite-wing </td> <td> 30 </td> </tr>" +
      "<tr> <td> 38 </td> <td> Radiografie retroalveolara </td> <td> 30 </td> </tr>" +
      "<tr> <td> 39 </td> <td> Modele Diagnostice / arcada </td> <td> 50 </td> </tr>" +
      "<tr> <td> 40 </td> <td> Modelare Diagnostica Ceara / arcada </td> <td>150</td> </tr>")
} else if (service === "Ortodonție") {
  modal.find('.modal-body .table tbody').html(
    "<tr> <th>#</th> <th>" + service + "</th> <th>Ron</th>" +
    "<tr> <td> 1 </td> <td> Aparat Mobil / arcada </td> <td> 1000 </td> </tr>" +
    "<tr> <td> 2 </td> <td> Aparat fix metalic / arcada </td> <td> 2500 </td> </tr>" +
    "<tr> <td> 3 </td> <td> Aparat fix ceramic / arcada </td> <td> 3000 </td> </tr>" +
    "<tr> <td> 4 </td> <td> Aparat fix safir per arcada </td> <td> 3500 </td> </tr>" +
    "<tr> <td> 5 </td> <td> Aparat fix lingual (Incognito) / arcada </td> <td> 2500E </td> </tr>" +
    "<tr> <td> 6 </td> <td> Disjunctor / arcada </td> <td> 1200 </td> </tr>" +
    "<tr> <td> 7 </td> <td> Control aparat fix </td> <td> 75 </td> </tr>" +
    "<tr> <td> 8 </td> <td> Control aparat mobil </td> <td> 50 </td> </tr>" +
    "<tr> <td> 9 </td> <td> Inlocuire bracket ceramic-relipire </td> <td> 50 </td> </tr>" +
    "<tr> <td> 10 </td> <td> Inlocuire bracket metalic </td> <td> 50 </td> </tr>" +
    "<tr> <td> 11 </td> <td> Inlocuire braket dezlipit </td> <td> 50 </td> </tr>" +
    "<tr> <td> 12 </td> <td> Inlocuire inel rupt </td> <td> 50 </td> </tr>" +
    "<tr> <td> 13 </td> <td> Lip bumber/ arc transpalatinal </td> <td> 600 </td> </tr>" +
    "<tr> <td> 14 </td> <td> Monobloc activator </td> <td> 1200 </td> </tr>" +
    "<tr> <td> 15 </td> <td> Pendulum </td> <td> 600 </td> </tr>" +
    "<tr> <td> 17 </td> <td> Retainer colat metalic </td> <td> 350 </td> </tr>" +
    "<tr> <td> 18  </td> <td> Gutiera contentie / arcada </td> <td> 350 </td> </tr>"
    )
} else if (service === "Protetică") {
  modal.find('.modal-body .table tbody').html(
    "<tr> <th>#</th> <th>" + service + "</th> <th>Ron</th>" +
    "<tr> <td> 1 </td> <td> Captusire directa proteza </td> <td> 150 </td> </tr>" +
    "<tr> <td> 2 </td> <td> Captusire indirecta proteza </td> <td> 250 </td> </tr>" +
    "<tr> <td> 3 </td> <td> Cimentat punte / dinte / element </td> <td> 30 </td> </tr>" +
    "<tr> <td> 4 </td> <td> Coroana CAD-CAM provizorie acrilat / laborator </td> <td> 200 </td> </tr>" +
    "<tr> <td> 5 </td> <td> Coroana provizorie acrilat laborator </td> <td> 75 </td> </tr>" +
    "<tr> <td> 6 </td> <td> Coroana provizorie compozit cabinet </td> <td> 75 </td> </tr>" +
    "<tr> <td> 7 </td> <td> Coroana provizorie prefabricata </td> <td> 100 </td> </tr>" +
    "<tr> <td> 8 </td> <td> Coroana Wiser (metalica cu fateta de compozit/acrilat) </td> <td> 300 </td> </tr>" +
    "<tr> <td> 9 </td> <td> Coroana metalica </td> <td> 250 </td> </tr>" +
    "<tr> <td> 10 </td> <td> Coroana metalo-ceramica integral fizionomica </td> <td> 600 </td> </tr>" +
    "<tr> <td> 11 </td> <td> Coroana metalo-ceramica semifizionomica </td> <td> 400 </td> </tr>" +
    "<tr> <td> 12 </td> <td> Coroana metalo-ceramica Ivoclar </td> <td> 800 </td> </tr>" +
    "<tr> <td> 13 </td> <td> Coroana integral ceramica </td> <td> 800 </td> </tr>" +
    "<tr> <td> 14 </td> <td> Coroana E-Max integral ceramica </td> <td> 900 </td> </tr>" +
    "<tr> <td> 15 </td> <td> Coroana Zirconiu </td> <td> 900 </td> </tr>" +
    "<tr> <td> 16 </td> <td> Coroana Zirconiu placat cu ceramică </td> <td> 1000 </td> </tr>" +
    "<tr> <td> 17 </td> <td> Coroana metalo-ceramica pe implant </td> <td> 900 </td> </tr>" +
    "<tr> <td> 18 </td> <td> Coroana zirconiu pe implant </td> <td> 1100 </td> </tr>" +
    "<tr> <td> 19 </td> <td> Coroana provizorie pe implant </td> <td> 300 </td> </tr>" +
    "<tr> <td> 20 </td> <td> Echilibrare ocluzala </td> <td> 500 </td> </tr>" +
    "<tr> <td> 21 </td> <td> Fateta ceramica / dinte </td> <td> 900 </td> </tr>" +
    "<tr> <td> 22 </td> <td> Fateta compozit direct / dinte </td> <td> 250 </td> </tr>" +
    "<tr> <td> 23 </td> <td> Fateta compozit  in laborator / dinte </td> <td> 450 </td> </tr>" +
    "<tr> <td> 24 </td> <td> Inlay ceramic </td> <td> 800 </td> </tr>" +
    "<tr> <td> 25 </td> <td> Onlay ceramic </td> <td> 800 </td> </tr>" +
    "<tr> <td> 26 </td> <td> Inlay compozit </td> <td> 550 </td> </tr>" +
    "<tr> <td> 27 </td> <td> Onlay compozit </td> <td> 550 </td> </tr>" +
    "<tr> <td> 28 </td> <td> Adaugare croset metalic in proteza </td> <td> 100 </td> </tr>" +
    "<tr> <td> 29 </td> <td> Adaugare dinte pe proteza acrilica </td> <td> 100 </td> </tr>" +
    "<tr> <td> 30 </td> <td> Reparatie baza proteza fracturata </td> <td> 200 </td> </tr>" +
    "<tr> <td> 31 </td> <td> Ajustare/Retus proteza superioara/inferioara </td> <td> 50 </td> </tr>" +
    "<tr> <td> 32 </td> <td> Ablatie coroana de acoperire </td> <td> 50 </td> </tr>" +
    "<tr> <td> 33 </td> <td> Ablatie coroana de acoperire 2 elemente </td> <td> 75 </td> </tr>" +
    "<tr> <td> 34 </td> <td> Ablatie coroana de acoperire  >> 3 elemente </td> <td> 100 </td> </tr>" +
    "<tr> <td> 35 </td> <td> Inregistrare arc facial </td> <td> 100 </td> </tr>" +
    "<tr> <td> 36 </td> <td> Proteza maxilara/mandibulara pe bara / implante </td> <td> 5000 </td> </tr>" +
    "<tr> <td> 37 </td> <td> Proteza maxiala/mandibulara cu capse / implante </td> <td> 3500 </td> </tr>" +
    "<tr> <td> 38 </td> <td> Proteza partiala acrilica / arcada </td> <td> 1000 </td> </tr>" +
    "<tr> <td> 39 </td> <td> Proteza scheletata cu culise sau capse </td> <td> 2800 </td> </tr>" +
    "<tr> <td> 40 </td> <td> Proteza totala acrilica / arcada </td> <td> 1000 </td> </tr>" +
    "<tr> <td> 41 </td> <td> Proteza totala elastica / arcada </td> <td> 1500 </td> </tr>" +
    "<tr> <td> 42 </td> <td> Plasa armare proteza totala </td> <td> 100 </td> </tr>" +
    "<tr> <td> 43 </td> <td> Pivot metalic </td> <td> 150 </td> </tr>" +
    "<tr> <td> 44 </td> <td> Pivot fibra sticla </td> <td> 150 </td> </tr>" +
    "<tr> <td> 45 </td> <td> Proteza cu capse minus capsele </td> <td> 1500 </td> </tr>" +
    "<tr> <td> 46 </td> <td> Capse proteza / buc </td> <td> 250 </td> </tr>" +
    "<tr> <td> 47 </td> <td> Recimentare coroana/punte </td> <td> 50 </td> </tr>"
    )
} else if (service === "Chirurgie / Implantologie") {
  modal.find('.modal-body .table tbody').html(
    "<tr> <th>#</th> <th>" + service + "</th> <th>Ron</th><th>Medic specialist</th>" +
    "<tr> <td>1 </td> <td>Elevare sinus maxilar abordare externa                      </td> <td>          </td> <td>     900 E        </td> </tr>"+
    "<tr> <td>2 </td> <td>Elevare sinus maxilar abordare interna                      </td> <td>          </td> <td>     300 E        </td> </tr>"+
    "<tr> <td>3 </td> <td>Extractie prin alveolotomie                                 </td> <td>    200   </td> <td>       250        </td> </tr>"+
    "<tr> <td>4 </td> <td>Extractie dinte lapte                                       </td> <td>    60    </td> <td>      75          </td> </tr>"+
    "<tr> <td>5 </td> <td>Extractie molari de minte                                   </td> <td>    250   </td> <td>       250        </td> </tr>"+
    "<tr> <td>6 </td> <td>Odontectomia (C,PM inclus; M3 semiinclus, M3 inclus)        </td> <td>    400   </td> <td>     450          </td> </tr>"+
    "<tr> <td>7 </td> <td>Extractie monoradiculari                                    </td> <td>    100   </td>  <td>     200         </td> </tr>"+

    "<tr> <td>8 </td> <td>Extractie pluridiculari                                   </td> <td>    150         </td> <td>       200      </td> </tr>"+
    "<tr> <td>9 </td> <td>Cura paratiala sinus maxilar                              </td> <td>     2000       </td> <td>      2000      </td> </tr>"+
    "<tr> <td>10</td> <td>Cura totala sinus maxilar                                  </td> <td>     2500       </td> <td>      2500      </td> </tr>"+
    "<tr> <td>11</td> <td>Decapusonare                                               </td> <td>     150        </td> <td>     150        </td> </tr>"+
    "<tr> <td>12</td> <td>Descoperire dinte inclus                                   </td> <td>     450        </td> <td>     450        </td> </tr>"+
    "<tr> <td>13</td> <td>Drenaj                                                     </td> <td>     150        </td> <td>     150        </td> </tr>"+
    "<tr> <td>14</td> <td>Gingivectomie / dinte                                      </td> <td>      50        </td> <td>      150       </td> </tr>"+
    "<tr> <td>15</td> <td>Incizie abces                                              </td> <td>      100       </td> <td>     150        </td> </tr>"+
    "<tr> <td>16</td> <td>Rezectie apicala grup frontal                              </td> <td>      450       </td> <td>     450        </td> </tr>"+
    "<tr> <td>17</td> <td>Rezectie apicala molari                                    </td> <td>                </td> <td>     600        </td> </tr>"+
    "<tr> <td>18</td> <td>Aditie osoasa (extractie, rezectie apicala)                </td> <td>                </td> <td>     600        </td> </tr>"+
    "<tr> <td>19</td> <td>Regularizare chirurgicala creasta/arcada                   </td> <td>     250        </td> <td>     250        </td> </tr>"+
    "<tr> <td>20</td> <td>Regularizare gingivala / arcada                            </td> <td>      100       </td> <td>     100        </td> </tr>"+
    "<tr> <td>21</td> <td>Tratament alveolita / sedinta                              </td> <td>      50        </td> <td>      50        </td> </tr>"+

    "<tr> <td>22</td> <td>Chistectomie                                               </td> <td>            </td> <td>     500        </td> </tr>"+
    "<tr> <td>23</td> <td>Chiuretaj gingival cu lambou / dinte                       </td> <td>            </td> <td>     250        </td> </tr>"+
    "<tr> <td>24</td> <td>Chiuretaj gingival cu lambou / arcada                      </td> <td>            </td> <td>     800        </td> </tr>"+
    "<tr> <td>25</td> <td>Chiuretaj periimplantar                                    </td> <td>            </td> <td>     850        </td> </tr>"+
    "<tr> <td>26</td> <td>Inserare Implant Zimmer (SUA)                              </td> <td>            </td> <td>     600 E      </td> </tr>"+
    "<tr> <td>27</td> <td>Inserare Implant PI (Suedia)                               </td> <td>            </td> <td>     400E       </td> </tr>"+
    "<tr> <td>28</td> <td>Bont Zymmer                                                </td> <td>            </td> <td>     100E       </td> </tr>"+
    "<tr> <td>29</td> <td>Bont PI                                                    </td> <td>            </td> <td>     50E        </td> </tr>"+
    "<tr> <td>30</td> <td>Regenerare osoasa 1-3                                      </td> <td>            </td> <td>     300 E      </td> </tr>"+
    "<tr> <td>31</td> <td>Regenerare osoasa ghidat a crestei alevolare (G.B.R.)      </td> <td>            </td> <td>     1000 E     </td> </tr>"+
    "<tr> <td>32</td> <td>Membrana resorbabila colagen                               </td> <td>            </td> <td>     100 E      </td> </tr>"+
    "<tr> <td>33</td> <td>Plastia comunicarii oro-sinusale                           </td> <td>     200    </td> <td>     200        </td> </tr>"+

    "<tr> <td>34</td> <td>Alveoloplastie (regularizarea procesului alveolar)         </td> <td>     100    </td> <td>     200        </td> </tr>"+
    "<tr> <td>35</td> <td>Premolarizare                                              </td> <td>            </td> <td>     200        </td> </tr>"+
    "<tr> <td>36</td> <td>Amputatie radiculara                                       </td> <td>            </td> <td>     250        </td> </tr>"+
    "<tr> <td>37</td> <td>Frenectomie                                                </td> <td>            </td> <td>     250        </td> </tr>"+
    "<tr> <td>38</td> <td>Biopsie de glande salivare minore                          </td> <td>            </td> <td>     300        </td> </tr>"+
    "<tr> <td>39</td> <td>Plastie torus                                              </td> <td>            </td> <td>     350        </td> </tr>"+
    "<tr> <td>40</td> <td>Extirparea/excizia tumorilor benigne de mici dimensiuni ale partilor moi orale (papilom, mucocel, epulis)  </td> <td>     </td> <td>     300        </td> </tr>"
    )
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


