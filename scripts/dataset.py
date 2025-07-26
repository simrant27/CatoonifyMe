import os
from glob import glob
from PIL import Image
from torch.utils.data import Datas
et
from torchvision import transforms

class CartoonDataset(Dataset):
    def __init__(self, original_dir, cartoon_dir, transform=None, limit=None):
        self.original_paths = sorted(glob(os.path.join(original_dir, '*.png')))
        self.cartoon_paths = sorted(glob(os.path.join(cartoon_dir, '*.png')))
        if limit:
            self.original_paths = self.original_paths[:limit]
            self.cartoon_paths = self.cartoon_paths[:limit]
        self.transform = transform

    def __len__(self):
        return len(self.original_paths)

    def __getitem__(self, idx):
        real = Image.open(self.original_paths[idx]).convert('RGB')
        cartoon = Image.open(self.cartoon_paths[idx]).convert('RGB')
        if self.transform:
            real = self.transform(real)
            cartoon = self.transform(cartoon)
        return real, cartoon


def get_transforms():
    return transforms.Compose([
        transforms.Resize((256, 256)),
        transforms.ToTensor(),
        transforms.Normalize([0.5]*3, [0.5]*3)
    ])
