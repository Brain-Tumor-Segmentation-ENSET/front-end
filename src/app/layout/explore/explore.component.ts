import { Component } from '@angular/core';
import { ButtonComponent } from '../../components/button/button.component';
import { Router } from '@angular/router';
import { StorageService } from '../../core/service/storage.service';

@Component({
  selector: 'app-explore',
  standalone: true,
  imports: [ButtonComponent],
  templateUrl: './explore.component.html',
  styleUrl: './explore.component.scss'
})
export class ExploreComponent {
  constructor(private router: Router, private storage: StorageService) { }
  tumors = [{
    image: 'assets/gliomas.jpg',
    name: 'Gliomas',
    desc: 'A brain tumor is an abnormal growth of cells in the brain. These tumors can be benign (non-cancerous) or malignant (cancerous). They can arise from various types of cells within the brain, including glial cells (such as astrocytes, oligodendrocytes, and ependymal cells) or neurons.',
    def: 'Gliomas are brain tumours associated with the three types of glial cells in the brain, which include astrocytes, oligodendrocytes and the ependymal cells. Glial cells make up the supportive tissue of the brain and, unlike neurons, don’t conduct electrical impulses. \nIf left untreated, any type of glioma may grow and press on other structures within the brain. Pressure on the brain can be harmful as it forces the brain against the skull, causing damage to the brain and hampering its ability to function properly. This reduced function can lead to long-lasting brain damage or, if left untreated, death.',
    symptoms: 'Symptoms of glioma depend on the size, grade, and location of the glioma, but can include: headaches, nausea and vomiting, drowsiness, seizures, changes in personality, memory loss, changes in speech, weakness or loss of feeling in limbs, walking difficulties, and vision changes and abnormal eye movements.',
    treatment: 'Treatment options for gliomas can include: Surgery – a craniotomy is a procedure performed by a neurosurgeon. A hole is cut into the skull in order to provide access to the brain. This allows a biopsy of the glioma and the opportunity to remove some of the tumour at the same time. After the operation is finished, the bone is replaced, and the muscle and skin are stitched. Radiotherapy – small, precise doses of radiation are used to target and destroy cancer cells. Chemotherapy – the use of cancer-killing drugs. In brain tumours, all 3 treatments are often in combination.'
  },
  {
    image: 'assets/meningioma.jpg',
    name: 'Meningioma',
    desc: 'A brain tumor is an abnormal growth of cells in the brain. These tumors can be benign (non-cancerous) or malignant (cancerous). They can arise from various types of cells within the brain, including glial cells (such as astrocytes, oligodendrocytes, and ependymal cells) or neurons.',
    def: 'A meningioma is a tumor that grows out of the meninges, particularly the one known as the arachnoid layer (so-called because it looks like a web). A meningioma is usually benign, although a small percentage are malignant (cancerous).\n\nThe tumor typically grows slowly and doesn’t spread to any other part of the body. Close to one in five brain tumors are meningiomas. Women and older people are more likely to develop this type of tumor, for reasons unknown. Symptoms depend on the size and location of the meningioma, but may include headaches and seizures.\n\nThe primary form of treatment is surgery to remove the tumor completely. In rare cases, this isn’t always possible because the meningioma is inaccessible, or parts may have invaded important blood vessels or nerves.',
    symptoms: 'The symptoms of meningioma depend on the location, type, and size but may include:\n\n- Seizures (fits)\n- Headaches\n- Impairment of brain functioning, depending on the location of the tumor.',
    treatment: 'About eight out of 10 meningiomas can be cured. Treatment depends on the location, type, and size of the tumor but may include:\n\n- Close monitoring - your doctors may prefer to simply watch and monitor a small tumor.\n- Steroid medications - to help reduce the inflammation and swelling around the tumor. A low-salt diet is also recommended.\n- Anti-epileptic drugs - to reduce the risk of brain seizures.\n- Surgery - the aim is to remove the tumor, or at least all parts that are safe to remove.'
  },
  {
    image: 'assets/pituitary.jpg',
    desc: 'A brain tumor is an abnormal growth of cells in the brain. These tumors can be benign (non-cancerous) or malignant (cancerous). They can arise from various types of cells within the brain, including glial cells (such as astrocytes, oligodendrocytes, and ependymal cells) or neurons.',
    name: 'Pituitary',
    def: 'A pituitary tumour (also called an adenoma) is a mass of cells that grow on the gland. Some tumours release hormones, although most do not. Generally, pituitary tumours are benign (not cancerous) and slow growing, and pituitary cancers are rare. Benign tumours don’t spread to other parts of the body, so there is no chance of secondary tumours developing. Treatment may include surgery, radiation therapy and medication.',
    symptoms: 'Symptoms of a pituitary tumor may have different causes. If the tumor is releasing a hormone, high levels of that hormone may be present in the bloodstream. If the normal pituitary gland function has been affected, there may be lower levels of one or more of the pituitary hormones.\n\nThere could also be symptoms caused by a growth or ‘mass effect’, resulting in pressure of the tumor on surrounding structures.\n\nSymptoms may include:\n\n- Visual disturbances, such as loss of peripheral vision (giving you ‘tunnel vision’) or (rarely) double vision\n- Loss of libido (sex drive) or erectile dysfunction (inability to have an erection) in men\n- Menstrual period irregularities in women\n- Changes to appearance\n- Cognitive difficulties, including problems with thinking\n- Persistent headaches\n- Nausea and vomiting\n- Light-headedness on standing up\n- Fatigue.',
    treatment: 'Treatment depends on the type and size of the tumor, and the person’s age and general health. Generally, the treatment options include:\n\n- Surgery – the pituitary gland is accessed via the nasal cavity and sinuses and no visible cuts are made. The tumor is removed using an endoscope or microscope. In rare cases, the tumor may have to be removed through the front of the skull (craniotomy). Surgery is the first-line treatment for all tumors except prolactinomas.\n- Radiation therapy – targets and destroys the tumor cells. Radiosurgery is focused radiotherapy that has improved the accuracy and minimized the risks of treating pituitary tumors. Radiosurgery is used in conjunction with surgery and medications to control the growth of tumors or to stop the activity of hormone-releasing tumors.\n- Medication – to shrink the tumor and stop it from producing hormones. Medication is the first line of treatment for prolactinoma. Hormone replacement therapy may also be required in cases of pituitary hypofunction or post-operatively.'
  },
  ]

  showDetails(tumor: any) {
    this.storage.tumor = tumor;
    console.log(tumor);
    this.router.navigate([`/${tumor.name}/infos`]);


  }
  start() {
    this.router.navigate(["/main"]);
  }

}
