import './sources.css';
import { Source } from '../../../types';

class Sources {
    public draw(data: Source[]): void {
        const fragment = document.createDocumentFragment();
        const sourceItemTemp = document.querySelector('#sourceItemTemp') as HTMLTemplateElement;

        data.forEach((item) => {
            const sourceClone = sourceItemTemp.content.cloneNode(true) as DocumentFragment;

            const sourceName = sourceClone.querySelector('.source__item-name') as HTMLElement;
            if (sourceName) sourceName.textContent = item.name;

            const sourceItem = sourceClone.querySelector('.source__item') as HTMLElement;
            if (sourceItem) sourceItem.setAttribute('data-source-id', item.id);

            fragment.append(sourceClone);
        });

        const sourcesContainer = document.querySelector('.sources') as HTMLElement;
        if (sourcesContainer) {
            sourcesContainer.append(fragment);
        }
    }
}

export default Sources;