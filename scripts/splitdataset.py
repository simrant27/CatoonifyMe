import os
import shutil
import random

# Input directories (full dataset)
original_dir = "../data/original"
cartoon_dir = "../data/cartoonized"

# Output split directories
train_original = "../data/train/original"
train_cartoon = "../data/train/cartoon"
val_original = "../data/val/original"
val_cartoon = "../data/val/cartoon"

# Create directories if not exist
os.makedirs(train_original, exist_ok=True)
os.makedirs(train_cartoon, exist_ok=True)
os.makedirs(val_original, exist_ok=True)
os.makedirs(val_cartoon, exist_ok=True)

# Get sorted file list
files = sorted(os.listdir(original_dir))
random.seed(42)
random.shuffle(files)

# Split ratio
split_ratio = 0.8
split_index = int(len(files) * split_ratio)

train_files = files[:split_index]
val_files = files[split_index:]

# Copy files
for file in train_files:
    shutil.copy(os.path.join(original_dir, file), os.path.join(train_original, file))
    shutil.copy(os.path.join(cartoon_dir, file), os.path.join(train_cartoon, file))

for file in val_files:
    shutil.copy(os.path.join(original_dir, file), os.path.join(val_original, file))
    shutil.copy(os.path.join(cartoon_dir, file), os.path.join(val_cartoon, file))

print(f"✅ Split complete! {len(train_files)} train, {len(val_files)} validation")
